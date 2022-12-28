import axios from 'axios';

export const getBicycleParkingApi = async (
  lat: string,
  long: string,
  dist: string,
) => {
  const bicycleParkings = [];

  try {
    const response = await axios.get(
      `http://datamall2.mytransport.sg/ltaodataservice/BicycleParkingv2`,
      {
        params: {
          Lat: lat,
          Long: long,
          Dist: dist,
        },
        headers: {
          AccountKey: process.env.ACCOUNT_KEY,
        },
      },
    );
    if (response) {
      const responseData = response.data;
      const result = responseData.value;
      if (result) {
        for (let index = 0; index < result.length; index++) {
          const item = result[index];

          const data = {
            description: item.Description,
            latitude: item.Latitude,
            longitude: item.Longitude,
            rackType: item.RackType,
            rackCount: item.RackCount,
            shelterIndicator: item.ShelterIndicator,
          };
          bicycleParkings.push(data);
        }
      }
    }
  } catch (e) {
    console.log('error = ', e);
  }

  return bicycleParkings;
};
