const qrCode = require('qrcode');
const text = process.argv[2]

const generateQR = text => (new Promise((resolve, reject) => {
  try {
    const result = qrCode.toFile(__dirname + "/qrcode.png", text);
    resolve(__dirname + "/qrcode.png")
  } catch (error) {
    reject(error)
  }
}))

generateQR(text)
  .then((resp) => {
    const result = resp.replace(/\s/g, "\\ ")
    const json = {
      title: "qrcode",
      arg: "",
      icon: {
        path: "qrcode.png"
      }
    }
    console.log(JSON.stringify(json));
  })
  .catch(err => console.log(err))
