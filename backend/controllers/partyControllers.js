const asyncHandler = require("express-async-handler");

const Party = require("../model/partyModel");

const getParties = asyncHandler(async (req, res) => {
  const parties = await Party.find();
  res.status(200).json(parties);
});

const setParty = asyncHandler(async (req, res) => {
  // console.log(req.body.name);
  if (!req.body.name) {
    res.status(400);
    throw new Error("Error message");
  }
  const parties = await Party.create({
    name: req.body.name,
    startingDate: req.body.date,
    leader: req.body.leader,
    members: req.body.number,
  });

  res.status(200).json(parties);
});

const putParty = asyncHandler(async (req, res) => {
  const parties = await Party.findById(req.params.id);

  if (!parties) {
    res.status(400);
    throw new Error("Party not found");
  }

  const updateParty = await Party.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateParty);
});

const deleteParty = asyncHandler(async (req, res) => {
  const parties = await Party.findById(req.params.id);

  if (!parties) {
    res.status(400);
    throw new Error("Party not found");
  }

  await parties.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getParties,
  setParty,
  putParty,
  deleteParty,
};
