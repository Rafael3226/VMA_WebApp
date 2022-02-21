import { MongoClient } from 'mongodb';
import { env } from 'process';

export default function testMongoConnection() {
  const client = new MongoClient(env.MONGODB);
  client
    .connect()
    .then(() => {
      console.log('Connected successfully to server');
    })
    .catch(console.error)
    .finally(() => client.close());
}
