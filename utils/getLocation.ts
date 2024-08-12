import MapModel from "@/models/Map";

const GetLocation = async () => {
  const data = await MapModel.findOne({}, "lat lng");
  return data;
};

export default GetLocation;
