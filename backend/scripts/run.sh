#!/bin/bash

pipenv install
(cd ../; pipenv run python app_bcknd.py);