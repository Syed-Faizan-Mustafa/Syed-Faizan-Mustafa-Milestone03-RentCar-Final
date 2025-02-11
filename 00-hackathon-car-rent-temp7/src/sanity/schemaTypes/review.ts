// // schemas/review
// export default {
//     name: 'review',
//     type: 'document',
//     title: 'Review',
//     fields: [
//       {
//         name: 'author',
//         type: 'string',
//         title: 'Author Name',
//         validation: (Rule) => Rule.required()
//       },
//       {
//         name: 'rating',
//         type: 'number',
//         title: 'Rating',
//         validation: (Rule) => 
//           Rule.required()
//             .min(1)
//             .max(5)
//             .error('Rating must be between 1 and 5')
//       },
//       {
//         name: 'comment',
//         type: 'text',
//         title: 'Comment',
//         validation: (Rule) => Rule.required()
//       },
//       {
//         name: 'date',
//         type: 'datetime',
//         title: 'Date',
//         initialValue: new Date().toISOString()
//       },
//       {
//         name: 'car',
//         type: 'reference',
//         to: [{ type: 'car' }],
//         title: 'Associated Car',
//         validation: (Rule) => Rule.required()
//       }
//     ]
//   };