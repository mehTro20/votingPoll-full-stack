const asyncHandler = require("express-async-handler");

const Party = require("../model/partyModel");

const getParties = asyncHandler(async (req, res) => {
  if (req.query._id === undefined) {
    const parties = await Party.find();
    console.log("many", req.params)
    return res.status(200).json(parties);
  } else {
    const party = await Party.findOne({_id: req.query._id});
    console.log("One", req.params.id)
    res.status(200).json(party);
  }
});

const setParty = asyncHandler(async (req, res) => {
  console.log(req.body);
  const data = req.body.partyDetails;
  if (!data.name) {
    res.status(400);
    throw new Error("Error message");
  }
  const parties = await Party.create({
    name: data.name,
    startingDate: data.date,
    leader: data.leader,
    members: data.number,
  });

  res.status(200).json(parties);
});

const putParty = asyncHandler(async (req, res) => {
  const parties = await Party.findById(req.params.id);

  if (!parties) {
    res.status(400);
    throw new Error("Party not found");
  }

  const updateParty = await Party.findByIdAndUpdate(
    req.params.id,
    req.body.partyVote,
    {
      new: true,
    }
  );
  console.log(req.body);
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
