import {
  FaCog,
  FaEdit,
  FaCalendarAlt,
  FaFileAlt,
  FaBars,
  FaTags,
  FaClipboardList,
  FaVideo ,
  FaBlog,
  FaEnvelopeOpenText,
  FaClock,
  FaUsers,
  FaBriefcase
} from 'react-icons/fa'

export default (S) =>
  S.list()
    .title('Content')
    .items([
      // ⚙️ Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(FaCog)
        .child(
          S.editor()
            .title('Site Settings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      S.divider(),

      // 📋 Header
      S.listItem()
        .title('Header')
        .icon(FaBars)
        .child(S.documentTypeList('menu').title('Header')),

      // 📋 Footer (title changed only)
      S.listItem()
        .title('Footer')
        .icon(FaBars) // made it match Header icon
        .child(
          S.editor()
            .title('Footer')
            .schemaType('footerSetting')
            .documentId('footerSetting')
        ),

      S.divider(),

      // 📄 Pages
      S.listItem()
        .title('Pages')
        .icon(FaFileAlt)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),

      // 🏷️ Categories
      S.listItem()
        .title('Categories')
        .icon(FaTags)
        .child(S.documentTypeList('category').title('Categories')),

      S.divider(),

      // 📅 Events
      // S.listItem()
      //   .title('Events')
      //   .icon(FaCalendarAlt)
      //   .child(S.documentTypeList('event').title('Events')),

      // S.listItem()
      //  .title('Messages')
      //  .icon(FaVideo)
      //  .child(S.documentTypeList('message').title('Messages')),

       S.listItem()
       .title('Blogs')
       .icon(FaBlog)
       .child(S.documentTypeList('post').title('Blogs')),

       S.listItem()
       .title('Careers')
       .icon(FaBriefcase)
       .child(S.documentTypeList('career').title('Careers')),
  //      S.listItem()
  //      .title('Hope Groups')
  //      .icon(FaUsers)
  //      .child(S.documentTypeList('hopeGroup').title('Hope Groups')),

  //      S.listItem()
  //      .title('countdown')
  //      .icon(FaClock)
  //      .child(
  //      S.editor()
  //      .schemaType('liveService')
  //      .documentId('liveService')
  // ),

      S.divider(),

      // S.listItem()
      //   .title('Event Registrations')
      //   .icon(FaClipboardList)
      //   .child(S.documentTypeList('eventRegistration').title('Event Registrations')),

      S.listItem()
       .title('Contact Form Submissions')
       .icon(FaEnvelopeOpenText)
       .child(S.documentTypeList('contactRegistration').title('Contact Submissions')),
    ])
