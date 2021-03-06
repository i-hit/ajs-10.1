import GameSavingLoader from '../gameSavingLoader';
import GameSaving from '../gameSaving';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

describe('success load()', () => {
  test('load data', (done) => {
    // eslint-disable-next-line no-unused-vars
    const expected = GameSavingLoader.load(data)
      .then((saving) => {
        expect(saving).toEqual(new GameSaving(JSON.parse(data)));
        done();
      });
  });
});

describe('fail load()', () => {
  test('load data', (done) => {
    const result = new Error('data empty');
    // eslint-disable-next-line no-unused-vars
    const expected = GameSavingLoader.load()
      .catch((saving) => {
        expect(saving).toEqual(result);
        done();
      });
  });
});
