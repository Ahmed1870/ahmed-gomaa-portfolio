#!/bin/bash

for f in \
README.md \
project_state.txt \
index.html \
components/about.js \
components/process.js \
components/services.js \
components/projects.js \
components/case-study.js \
components/hero.js \
components/contact.js \
data/hr.js \
data/omnichannel.js \
data/rfm.js \
projects/hr.js \
projects/omnichannel.js \
projects/rfm.js \
js/data.js \
js/projects.js
do
    if [ -f "$f" ]; then
        echo ""
        echo "======================================================================"
        echo "FILE: $f"
        echo "======================================================================"
        cat "$f"
        echo ""
    fi
done
