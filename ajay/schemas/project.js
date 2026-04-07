import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "project" }),
    {
      name: 'title',
      title: 'Title',
      description:"Title of the project",
      type: 'string',
    },
    {
      name:"image",
      title:"Image",
      type:"image",
      option: { 
        hotspot: true,
      },
    },
    {
      name: "video",
      title: "Video URL",
      description: "Paste a direct video URL (e.g. from Cloudinary, Imgur, or a hosted .mp4 link) to avoid large payload network timeouts",
      type: "url",
    },
    {
      name:"summary",
      title: "Summary",
      type:"text",
    }, 
    {
      name:"technologies",
      title:"Technologies",
      type:"array",
      of:[{ type:"reference", to: { type: "skill"}}],
    }, 
    {
      name:"linkToBuild",
      title:"LinkToBuild",
      type:"url",
    },
    {
      name: "githubLink",
      title: "GitHub Link",
      description: "Direct link to the GitHub repository",
      type: "url",
    },
  ],
}
