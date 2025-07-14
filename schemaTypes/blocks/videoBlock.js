export default {
  name: 'videoBlock',
  title: 'Video Block',
  type: 'object',
  fields: [
    // -------- Content --------
    {
      name: 'videoType',
      title: 'Video Type',
      type: 'string',
      options: {
        list: [
          { title: 'YouTube', value: 'youtube' },
          { title: 'Vimeo', value: 'vimeo' },
          { title: 'MP4 Upload', value: 'upload' },
        ],
      },
    },
    {
      name: 'videoUrl',
      title: 'Video URL (YouTube/Vimeo)',
      type: 'url',
      hidden: ({ parent }) => parent?.videoType === 'upload',
    },
    {
      name: 'videoFile',
      title: 'Upload MP4',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
      hidden: ({ parent }) => parent?.videoType !== 'upload',
    },
    {
      name: 'overlayImage',
      title: 'Overlay Image (Poster)',
      type: 'image',
      description: 'Shown before video is played',
    }
    
  ],
}
