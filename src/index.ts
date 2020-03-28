import fetch from "node-fetch";
import { SearchParams, SearchResults, DetailsResults } from "./api-types";

class Client {
  private base_url = "https://api.nal.usda.gov/fdc/v1";
  private _config = { api_key: "" };

  constructor(props: { api_key?: string }) {
    if (props.api_key === undefined) {
      throw Error("api_key is required.");
    }

    this._config.api_key = props.api_key;
  }

  private uri(params?: SearchParams) {
    const api_key = `api_key=${this._config.api_key}`;

    if (params === undefined) {
      return api_key;
    }

    const query = Object.entries(params)
      .map(entry => {
        let [key, value] = entry;

        if (Array.isArray(value)) {
          value = value.join(",");
        }

        return `${key}=${value}`;
      })
      .join("&");

    return `${api_key}&${query}`;
  }

  private async call<R>(uri: string): Promise<{ success: true; data: R } | { success: false; error: Error }> {
    try {
      const result = await fetch(`${this.base_url}${uri}`);
      const data: R = await result.json();

      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  public async search(params: SearchParams) {
    return this.call<SearchResults>(`/search?${this.uri(params)}`);
  }

  public async details(fdcId: number) {
    return this.call<DetailsResults>(`/${fdcId}?${this.uri()}`);
  }
}

export default Client;
export { SearchResults, DetailsResults };
