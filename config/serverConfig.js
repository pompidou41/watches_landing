const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const ssr = require('../middlewares/ssr');
const { verifyAccessToken } = require('../middlewares/verifyJWT');

const config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(ssr);
  app.use(cookieParser());
  app.use(verifyAccessToken);
};

module.exports = config;
