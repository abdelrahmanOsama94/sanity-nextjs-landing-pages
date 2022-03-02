export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '621f325636bc7a851b6ba507',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n7hfm67y',
                  apiId: 'fb97a7a9-6579-42c4-9b5c-a7b067865f77'
                },
                {
                  buildHookId: '621f325718ebcc86f8a23a9f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hwpqkctu',
                  apiId: '6e99696b-9b0f-483b-84c8-c852da36a1d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abdelrahmanOsama94/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hwpqkctu.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
