const express = require('express');
const path = require('path');
const ALMUSTAPHA=express();
const bodyparser= require('body-parser');

ALMUSTAPHA.use(bodyparser.json());
ALMUSTAPHA.use(express.static(path.resolve(__dirname+'/')));

ALMUSTAPHA.use(bodyparser.urlencoded({extended: false}));

ALMUSTAPHA.listen(process.env.PORT || 1882);