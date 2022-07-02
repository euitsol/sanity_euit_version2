// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import course_product from './course_product'
import our_partners from './our_partners'
import facilities from './facilities'
import students_success from './students_success'
import professionals_opinion from './professionals_opinion'
import video_feedback from './video_feedback'
import written_feedback from './written_feedback'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    course_product,
    our_partners,
    facilities,
    students_success,
    professionals_opinion,
    video_feedback,
    written_feedback

  ]),
})
