const resolvers = {
    Query: {
        async getSkills(){
            try{
                const skills = await Skill.find();
                return skills;
            }   catch (err){
                throw new Error(err);
            }
        }
    }
};