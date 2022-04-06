const FETCHCOVIDDATA = 'FETCHCOVIDHDATA';
const initialState = [];
const covidApiUrl = 'https://api.covid19api.com/summary';
export const getData = (payload) => ({
  type: FETCHCOVIDDATA,
  payload,
});

const CovidInfo = (state = initialState, action) => {
  switch (action.type) {
    case FETCHCOVIDDATA:
      return action.payload;
    default:
      return state;
  }
};

export const CountriesStatistics = () => async (dispatch) => {
  const response = await fetch(covidApiUrl);
  const data = await response.json();
  const allCountriesData = data.Countries.map((event) => {
    const currentCovidData = {
      id: event.ID,
      country: event.Country,
      NewConfirmed: event.NewConfirmedCases,
      TotalConfirmed: event.TotalConfirmedCases,
      NewDeaths: event.NewDeathsRecorded,
      TotalDeaths: event.TotalDeathsRecorded,
      NewRecovered: event.NewRecoveredCases,
      TotalRecovered: event.TotalCasesRecovered,
      Date: event.Date,
    };
    return currentCovidData;
  });
  dispatch(getData(allCountriesData));
};

export default CovidInfo;
