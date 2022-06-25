/* eslint-disable @next/next/no-img-element */
const SkillItem = ({ name, logo, className }) => {
    return (
        <div className="w-full col-span-4 md:col-span-2">
            <div className={`transform p-6 text-center text-gray-400 rounded  mx-auto ${className}`}>
                <img className="block mx-auto transition duration-75 opacity-50 hover:opacity-80 filter grayscale hover:filter-none hover:contrast-80" src={'/images/tech/' + logo} alt={name}/>
                <span className="">{name}</span>
            </div>
        </div>
    )
}

const About =  () => {
    
    return (
        <section className="container mx-auto">

            <div className="mb-10">
                <h3 className="mb-5 text-2xl font-semibold text-left dark:text-gray-200">My favorite frameworks</h3>
                <p className="mb-5 text-gray-500 dark:text-gray-300">
                    I have huge experience working with <strong className="font-semibold ">Angular, React, VueJS and NodeJS</strong>.
                     And I love taking care of <strong className="font-semibold ">UI / UX design</strong>, look and feel, user interaction and responsive behaviour.
                </p>

                <p className="mb-4 text-gray-500 dark:text-gray-300">
                    Some of my favorite design tools are Adobe Photoshop, Illustrator, Xperience Design and others.
                </p>
            </div>
            
            <div className="grid max-w-sm grid-cols-12 gap-4 mx-auto md:max-w-4xl md:grid-cols-12 md:gap-6">
                <SkillItem logo="html5.png" name="HTML 5" className="" />
                <SkillItem logo="css.png" name="SCSS" className="bg-gray-900"/>
                <SkillItem logo="vue.png" name="Vue JS" className="" />
                <SkillItem logo="react.png" name="React JS" className="bg-gray-900"/>
                <SkillItem logo="angular.png" name="Angular" className=""/>
                <SkillItem logo="node.png" name="Node JS" className="bg-gray-900"/>
            </div>

            <div className="p-4 mx-auto mt-10 text-center">
                <div className="p-8 border border-gray-200 border-dashed rounded">

                    <h3 className="mb-4 text-3xl font-semibold dark:text-cyan-500">Learning</h3>
                    <p className="mb-4 text-gray-400">
                        These are some frameworks / libs I like to keep studying everyday.
                    </p>
                    <div className="flex items-center justify-center max-w-md mx-auto mt-5">
                        <SkillItem logo="reduxx.png" name="Redux" />
                        <SkillItem logo="csharp.png" name="C#" />
                        <SkillItem logo="graphql.png" name="Graphql" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About;
