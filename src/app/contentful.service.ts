import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';

// A service for getting posts from Contentful

// Contentful Config from Env
const CONFIG = {
  space: environment.contentful.spaceId,
  accessToken: environment.contentful.token,
    contentTypeIds: {
      work: 'work',
      blog: 'blog'
    }
};

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() {}

  // fetch products
  getProjects(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: CONFIG.contentTypeIds.work
          },
          query
        )
      )
      .then(res => res.items);
  }

  getProject(slug: string): Promise<Entry<any>> {
    return this.getProjects({ 'fields.slug': slug }).then(items => items[0]);
  }

}
