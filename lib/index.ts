import { IRiotClient } from "./interfaces";
import { SummonerClient } from "./summoner";

export class RiotClient {
  private summonerClient: SummonerClient;

  constructor({ apiKey, region = "na1" }: IRiotClient) {
    this.summonerClient = new SummonerClient(apiKey, region);
  }

  async getSummonerByName(name: string) {
    return await this.summonerClient.getByName(name);
  }

  async getSummonerByAccountId(accountId: string) {
    return await this.summonerClient.getByAccountId(accountId);
  }

  async getSummonerByPUUID(puuid: string) {
    return await this.summonerClient.getByPUUID(puuid);
  }

  async getSummonerById(id: string) {
    return await this.summonerClient.getById(id);
  }
}
