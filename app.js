const fs = require('fs');

class FileManager {
    constructor(path) {
        this.path = path
    }

    checkFileExist() {
        try {
            return fs.existsSync(this.path);
        } catch(err) {
            return false;
        }
    }

    checkFileOrDir() {
        const state = fs.statSync(this.path);
        if (state.isFile()) {
            console.log(`${this.path} is file`);
        } else if (state.isDirectory()) {
            console.log(`${this.path} is directory`);
        } else {
            console.log(`${this.path} is nu known type`);
        }
    }

    createDir() {
        if (! this.checkFileExist(this.path)) {
            fs.mkdirSync(this.path, (err) => {
                if (err) { 
                    console.log(`${this.path} directory don't exist.`);
                    return false;
                };
                console.log(`${this.path} directory exist.`);
            });
        } else {
            console.log(`${this.path} directory already exist.`);
        }
    }

    createFile() {
        if (! this.checkFileExist(this.path)) {
            fs.writeFileSync(this.path, '', (err) => {
                if (err) {
                    console.log(`${this.path} file don't exist.`);
                    return;
                }
                console.log(`${this.path} file exist.`);
            })
        } else {
            console.log(`${this.path} file already exist.`);
        }
    }

}

const paths = ['app.js', 'app', 'app/http', 'app/routes', 'app/models', 'app/resource', 'app/resource/views', 'app/http/midelwares', 'app/http/controllers'];
paths.forEach(item => {
    const fm = new FileManager(item);
    fm.checkFileOrDir();
})


