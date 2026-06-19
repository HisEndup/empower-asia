const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + "/dist",
  remoteRoot: "/public_html/",
  include: ["*", "**/*"],
  deleteRemote: false,
  forcePasv: true
};

ftpDeploy.deploy(config).then(res => console.log("Deploy done:", res)).catch(err => console.log("Error:", err));
