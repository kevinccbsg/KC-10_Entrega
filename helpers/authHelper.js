'use strict'
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')
const config = require('app-config')
const Usuario = require('../models/Usuario')
// const debug = require('debug')('Nodepop:helpers:authHelper')

let opts = config.config.optsAuth
opts.jwtFromRequest = ExtractJwt.fromAuthHeader()

passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
  Usuario.findOne({ id: jwtPayload.sub }, (err, user) => {
    if (err) return done(err, false)
    if (!user) return done(null, false)

    done(null, user)
  })
}))

module.exports.isAuthenticated = passport.authenticate('jwt', { session: false })
