const gql = require('graphql-tag');

const typeDefs = gql`
    type Skill{
        id:ID!
        title:String!
        username:String!
        currentHour:Int!
    }
    type Query{
        getSkills: [Skill]
    }
`;

module.exports = typeDefs;
