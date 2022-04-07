import covidInfo from '../redux/Info/CovidInfo';

const mockStore = {
  countriesReducer: [
    {
      ID: 'd82d5e40-da86-48f5-89c4-2ae919c27773',
      Country: 'Argentina',
      CountryCode: 'AF',
      Slug: 'argentina',
      NewConfirmedCases: 0,
      TotalConfirmedCases: 9011367,
      NewDeathsRecorded: 0,
      TotalDeathsRecorded: 127599,
      NewRecoveredCases: 0,
      TotalCasesRecovered: 0,
      Premium: {},
    },
    {
      ID: '1cbf1306-98b8-4f82-9bb7-89719c59db3c',
      Country: 'Cyprus',
      CountryCode: 'CY',
      Slug: 'cyprus',
      NewConfirmedCases: 0,
      TotalConfirmedCases: 367743,
      NewDeathsRecorded: 0,
      TotalDeathsRecorded: 905,
      NewRecoveredCases: 0,
      TotalCasesRecovered: 0,
      Premium: {},
    },
  ],
};

describe('Test', () => {
  test('Initial State', () => {
    expect(covidInfo([], {})).toEqual([]);
  });
});

describe('Mock covidData Reducer', () => {
  test('Test covidData Reducer With Mock Data', () => {
    const LOAD_DATA = 'LOAD_DATA';
    const store = mockStore;
    const action = {
      type: LOAD_DATA,
      payload: {
        countriesReducer: [
          {
            ID: 'd82d5e40-da86-48f5-89c4-2ae919c27773',
            Country: 'Argentina',
            CountryCode: 'AF',
            Slug: 'argentina',
            NewConfirmed: 0,
            TotalConfirmed: 9011367,
            NewDeaths: 0,
            TotalDeaths: 127599,
            NewRecovered: 0,
            TotalRecovered: 0,
            Premium: {},
          },
          {
            ID: '1cbf1306-98b8-4f82-9bb7-89719c59db3c',
            Country: 'Cyprus',
            CountryCode: 'CY',
            Slug: 'cyprus',
            NewConfirmed: 0,
            TotalConfirmed: 367743,
            NewDeaths: 0,
            TotalDeaths: 905,
            NewRecovered: 0,
            TotalRecovered: 0,
            Premium: {},
          },
        ],
      },
    };
    expect(covidInfo(store, action)).toEqual(action.payload);
  });
});
