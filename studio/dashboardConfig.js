export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62ce1ff6fe80691657f2ba49',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-b6zqunq6',
                  apiId: 'fb15b2b8-30bb-48b9-9c79-f6419a3f3c3d'
                },
                {
                  buildHookId: '62ce1ff76c721216192a82e2',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ou7pewgf',
                  apiId: '42ce15cd-2ff9-4042-ae60-96194dbf2153'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/persephonepunch/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ou7pewgf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
