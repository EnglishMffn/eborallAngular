import { Injectable } from '@angular/core';
// import Contentful createClient and type for `Entry`
import { createClient, Entry } from 'contentful';

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
  space: 'yoo4e4pv9t7m',
  accessToken:
    'fc0e321b58b041271b60fbb48110dac5d4066d8751c46ab96ce7ff533028dceb',

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
