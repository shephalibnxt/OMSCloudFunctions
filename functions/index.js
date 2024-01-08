const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
admin.initializeApp();
const firestore = admin.firestore();
const {onRequest} = require("firebase-functions/v2/https");

exports.fetchRules = onRequest(async (Request, Response) => {
  try {
    const collectionRef = firestore
        .collection("oms")
        .doc("mid_routing")
        .collection("rules");
    const snapshot = await collectionRef.get();
    const documents = [];
    snapshot.forEach((doc) => {
      console.log(doc.data());
      documents.push(doc.data());
    });
    console.log(documents);
    Response.status(200).json(documents);
  } catch (error) {
    logger.error("Error while fetching the documents:", error);
    Response.status(500).send("Internal server error");
  }
});

exports.fetchEmail = onRequest(async (Request, Response) => {
  try {
    const collectionRef = firestore
        .collection("oms")
        .doc("mid_routing")
        .collection("merchant_detail");
    const snapshot = await collectionRef.get();
    const emails = [];
    snapshot.forEach((doc) => {
      console.log(doc.data().PGML);
      emails.push(doc.data().PGML);
    });
    console.log(emails);
    Response.status(200).json(emails);
  } catch (error) {
    logger.error("Error while fetching the documents:", error);
    Response.status(500).send("Internal server error");
  }
});

exports.fetchRoute = onRequest(async (Request, Response) => {
  try {
    const collectionRef = firestore
        .collection("oms")
        .doc("mid_routing")
        .collection("routes");
    const snapshot = await collectionRef.get();

    const documents = [];
    snapshot.forEach((doc) => {
      console.log(doc.data());
      documents.push(doc.data());
    });
    console.log(documents);
    Response.status(200).json(documents);
  } catch (error) {
    logger.error("Error while fetching the documents:", error);
    Response.status(500).send("Internal server error");
  }
});

