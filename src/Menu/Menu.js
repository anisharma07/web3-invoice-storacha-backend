import React, { Component } from "react";
import "./Menu.css";
import * as AppGeneral from "../socialcalc/AppGeneral";
import { Files, Local } from "../storage/LocalStorage.js";
import { DATA } from "../app-data.js";
import { create } from "@web3-storage/w3up-client";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.store = new Local(this.props.file);
  }

  doPrint() {
    const content = AppGeneral.getCurrentHTMLContent();
    var printWindow = window.open("", "", "left=100,top=100");
    printWindow.document.write(content);
    printWindow.print();
    printWindow.close();
  }

  doSave() {
    if (this.props.file === "default") {
      window.alert(`Cannot update ${this.props.file} file! `);
      return;
    }
    const content = encodeURIComponent(AppGeneral.getSpreadsheetContent());
    const data = this.store._getFile(this.props.file);
    const file = new Files(
      data.created,
      new Date().toString(),
      content,
      this.props.file
    );
    this.store._saveFile(file);
    this.props.updateSelectedFile(this.props.file);
    window.alert(`File ${this.props.file} updated successfully! `);
  }

  uploadToIPFS = async (fileData) => {
    try {
      const client = await create();
      const account = await client.login('chaitutatipamula023@gmail.com');
      await client.setCurrentSpace('did:key:z6MkvMYPfaAz29PPqqe3JoGa1MEQGnNGjyfszBgZbGt6t2QT');
      const formattedFile = new File(
        [JSON.stringify(fileData)],
        `${fileData.name}`,
        { type: 'application/json' }
      );
      console.log(formattedFile);
      const cid = await client.uploadDirectory([formattedFile]);
      return cid.toString();
    } catch (error) {
      console.error('IPFS Upload Error:', error);
      throw error;
    }
  };

  doSaveAs = async () => {
    event.preventDefault();
    const filename = window.prompt("Enter filename : ");
  
    if (filename && this._validateName(filename)) {
      try {
        const content = encodeURIComponent(AppGeneral.getSpreadsheetContent());  
        const fileData = {
          name: filename,
          content: content,
          created: new Date().toString(),
          modified: new Date().toString()
        };
        
        const localFile = new Files(
          new Date().toString(),
          new Date().toString(),
          content,
          filename
        );
        const cid = await this.uploadToIPFS(fileData);

        this.store._saveFile(localFile);
        this.props.updateSelectedFile(filename);
        window.alert(`File ${filename} saved successfully! IPFS CID: ${cid} `);
  
      } catch (error) {
        console.error('Save As Error:', error);
        window.alert(error.message || "Failed to save file");
      }
    } else {
      window.alert(`Invalid filename: ${filename}`);
    }
  }

  newFile() {
    if (this.props.file !== "default") {
      const content = encodeURIComponent(AppGeneral.getSpreadsheetContent());
      const data = this.store._getFile(this.props.file);
      const file = new Files(
        data.created,
        new Date().toString(),
        content,
        this.props.file
      );
      this.store._saveFile(file);
      this.props.updateSelectedFile(this.props.file);
    }
    const msc = DATA["home"][AppGeneral.getDeviceType()]["msc"];
    AppGeneral.viewFile("default", JSON.stringify(msc));
    this.props.updateSelectedFile("default");
  }

  render() {
    return (
      <div className="Menu">
        <button onClick={() => this.doSave()}> Attest with Sign </button>
        <button onClick={() => this.doSaveAs()}> Connect to Avail's Light Clients</button>
        <button onClick={() => this.doPrint()}> KYC Secure Verify with Lit </button>
        <button onClick={() => this.newFile()}> New File </button>
      </div>
    );
  }

  /* Utility functions */
  _validateName(filename) {
    filename = filename.trim();
    if (filename === "default" || filename === "Untitled") {
      // return 'Cannot update default file!';
      return false;
    } else if (filename === "" || !filename) {
      // this.showToast('Filename cannot be empty');
      return false;
    } else if (filename.length > 30) {
      // this.showToast('Filename too long');
      return false;
    } else if (/^[a-zA-Z0-9- ]*$/.test(filename) === false) {
      // this.showToast('Special Characters cannot be used');
      return false;
    }
    return true;
  }

  _formatString(filename) {
    /* Remove whitespaces */
    while (filename.indexOf(" ") !== -1) {
      filename = filename.replace(" ", "");
    }
    return filename;
  }
}

export default Menu;
