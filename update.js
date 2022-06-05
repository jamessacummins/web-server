const fs = require('fs')
const path = require('path')
const {NodeSSH} = require('node-ssh')
const { exec } = require("child_process");
const ssh = new NodeSSH()

connectToSSH();

function connectToSSH(){
    ssh.connect({
    host: '3.25.82.61',
    username: 'bitnami',
    privateKey: "./ky.pem",
    })
    .then(function(){
        var commandArgument = process.argv[2] == null ? "" : process.argv[2] + ";";
        ssh.execCommand(commandArgument + "cd web-server; git pull; git submodule update --recursive --remote; pm2 refresh all")
        .then(function(){
            ssh.dispose();
        })
    })
};



