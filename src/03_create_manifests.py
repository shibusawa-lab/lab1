from bs4 import BeautifulSoup
import json
import glob
import urllib.parse
from rdflib import URIRef, BNode, Literal, Graph
from rdflib.namespace import RDF, RDFS, FOAF, XSD
from rdflib import Namespace
import pandas as pd
import numpy as np
import os
import requests

import requests
import shutil

from PIL import Image

path = "../static/data/ad.json"

json_open = open(path, 'r')
df = json.load(json_open)

for ad in df:
    if "http://schema.org/url" in ad:
        url = ad["http://schema.org/url"][0]["@id"]

        print(url)

        name = url.split("/")[-1]

        path = "data/html/" + name + ".html"

        if not os.path.exists(path):
            r = requests.get(url)
            soup = BeautifulSoup(r.content)

            with open(path, mode='w') as f:
                f.write(str(soup))

        soup = BeautifulSoup(open(path,'r'), "lxml")

        # print(soup)

        arr = str(soup).split("'")

        imgs = []

        for a in arr:
            if "http://base1.nijl.ac.jp/~jituhaku" in a and "\"" not in a and a not in imgs:
                imgs.append(a)

        print(imgs)

        canvases = []

        prefix = "http://shibusawa-dlab.github.io/lab1/iiif/{}".format(name)
        manifest_uri = prefix + "/manifest.json".format(name)

        for i in range(len(imgs)):

            img = imgs[i]

            index = i + 1

            name2 = img.split("/")[-1]

            path2 = "data/images/"+name2

            if not os.path.exists(path2):

                r = requests.get(img, stream=True)
                if r.status_code == 200:
                    with open(path2, 'wb') as f:
                        r.raw.decode_content = True
                        shutil.copyfileobj(r.raw, f)

            
            im = Image.open(path2)

            w,h = im.size

            print(w,h )

            canvases.append({
                "@id": "{}/canvas/p{}".format(prefix, index),
                "@type": "sc:Canvas",
                "height": h,
                "images": [
                    {
                    "@id": "{}/annotation/p{}-image".format(prefix, index),
                    "@type": "oa:Annotation",
                    "motivation": "sc:painting",
                    "on": "{}/canvas/p{}".format(prefix, index),
                    "resource": {
                        "@id": img,
                        "@type": "dctypes:Image",
                        "format": "image/jpeg",
                        "height": h,
                        "width": w
                    }
                    }
                ],
                "label": "[{}]".format(index),
                "thumbnail": {
                    "@id": img,
                    "@type": "dctypes:Image",
                    "format": "image/jpeg",
                    "width": w,
                    "height": h
                },
                "width": w
                })

        trs = soup.find(class_="detail_tbl").find("tbody").find_all("tr")
        metadata = []
        for tr in trs:
            tds = tr.find_all("td")
            print(tds)
            metadata.append({
                "label" : tds[0].text,
                "value" : tds[1].text.strip()
            })
        
        
        manifest = {
            "@context": "http://iiif.io/api/presentation/2/context.json",
            "@id": manifest_uri,
            "@type": "sc:Manifest",
            "attribution": "国文学研究資料館",
            "label": soup.find(class_="infolib_section").text.strip(),
            "license": "http://base1.nijl.ac.jp/~jituhaku/",
            "metadata": metadata,
            "related": {
                "@id" : url,
                "format": "text/html"
            },
            "sequences": [
                {
                    "@id": "{}/sequence/normal".format(prefix),
                    "@type": "sc:Sequence",
                    "canvases": canvases
                }
            ]
        }

        path = "../static/iiif/{}/manifest.json".format(name)

        dir = os.path.dirname(path)

        os.makedirs(dir, exist_ok=True)

        with open(path, 'w') as outfile:
            json.dump(manifest,  outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))