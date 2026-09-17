'use server'

import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener'


type Args = {
    params: Promise<{
        slug?: string
    }>
}


export default async function CoachingStaffPage({ params: paramsPromise }: Args) {


    return (
        <>
            <div id="content" className="flex flex-col w-full gap-0 bg-white text-near-black pb-30">

                {/* Page Header  */}

                <div className='w-full h-12 bg-primary' />
                <div className="flex w-full h-fit p-12 py-18 bg-[whitesmoke]">
                    <h3 className='text-3xl font-qb text-near-black w-full text-center'>Coaching Staff</h3>
                </div>

                <div className="flex justify-center w-full h-fit p-6 py-12 flex-wrap gap-8">
                    {COACHES.map(coach => {

                        return (
                            <div key={coach.name} className="flex flex-col gap-2 w-50 h-fit p-2">
                                <div {...{
                                    className: 'flex items-center justify-center w-full aspect-[3/4] bg-[grey] rounded-xs'
                                }}>
                                    <div className='flex bg-contain bg-no-repeat w-20 aspect-[3/4] h-fit bg-center opacity-15 grayscale' style={{
                                        backgroundImage: `url("/media/teams/ignatius-1.png")`
                                    }} />
                                </div>
                                <div className="flex flex-col gap-1 py-4">
                                    <span className='font-qb text-lg leading-tight pr-4'>{coach.name}</span>
                                    <span className='font-sans text-sm leading-tight'>{coach.title}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* <div className="flex flex-col gap-0 w-full h-fit p-6">
                    {page.blocks && <RenderBlocks blocks={page.blocks} />}
                </div> */}
            </div>
        </>
    )
}

const COACHES = [
    {
        "name": "Spencer Montgomery",
        "team": "Varsity Gold",
        "title": "Program Director - Varsity Gold Head Coach",
        "bio": "Spencer Montgomery leads Saint Ignatius Varsity Gold in his fifth season as Hockey Director and Head Coach. This will be his twelveth year with the program after serving as Varsity Associate Head Coach for 7 seasons. He is a Level 5 USA Hockey Coach and in addition to Saint Ignatius, Spencer has coached for the Chicago Blackhawks Brick Teams, Chicago Stallions, Portland Junior Pirates (ME), and Bedford Bears (NY). Spencer was named the 2023 Chicago Catholic Hockey League Coach of the Year and was voted to coach the All-State and CCHL All-Star Teams.\n\nSpencer is a Partner and Director of Events at “The Barn”, Chicago’s first Original Six Hockey Bar located just down the road at Ogden & Adams. Spencer spent nine seasons working for the Chicago Blackhawks where he served as Manager, Adult and High School Hockey Development. Spencer was born and raised in Portland, Maine, and captained the Wheaton College (MA) ACHA hockey team."
    },
    {
        "name": "Jeff Rogers",
        "team": "Varsity Gold",
        "title": "Varsity Gold Associate Head Coach",
        "bio": "Jeff Rogers is in his ninth year with the Wolfpack and fifth as Varsity Gold Associate Head Coach. Prior to joining the Wolfpack, Jeff spent two years as the JV Head Coach and Varsity Assistant at Hinsdale Central. Jeff grew up in Orland Park and played youth hockey locally -- AA hockey with the St. Jude Knights and Chicago Hawks and AAA hockey for Team Illinois. Jeff also played high school hockey at Marist High School where he was a 4-year varsity letterman and a senior captain. Following high school, Jeff played Division-III hockey at St. Norbert College in DePere, WI.\n\nJeff started his coaching career in 1994 as an Assistant Varsity coach with his alma mater. In his one year at Marist, Varsity won the Kennedy Cup Championship and finished second in state after falling to New Trier Green at the old Chicago Stadium. Jeff continued his coaching career with the Chicago Hawks organization where he coached his son Jack at the mite and squirt levels. Jeff is a Level 4 Certified USA Hockey Coach.\n\nJeff lives in Downers Grove with his wife Lynn, daughter Brigid, a Pediatric Intensive Care Nurse at Lurie Children's Hospital and son Jack, a Saint Ignatius Hockey Alumni and a freshman at Fairfield University."
    },
    {
        "name": "Nick Ustaski",
        "team": "Varsity Gold",
        "title": "Varsity Gold Assistant Coach",
        "bio": "Nick has been involved with the program the past eleven years serving as both a coach, mentor, and advisor to the Varsity and JV teams. Nick grew up in Glenview, Illinois and played youth hockey locally with the Glenview Stars program. Nick also played high school hockey at Lake Forest Academy prep school where he was a four-year varsity lettermen and captain. Following high school, Nick played NCAA Division-III hockey at Lawrence University in Appleton, Wisconsin and ACHA D-1 hockey at the University of Delaware.\n\nWhile at Delaware, Nick was the team captain, program leader and athletic representative to the school. He was also an academic All-American, second team all-league. Academically, Nick graduated Magna Cum Laude with a degree with distinction in history and foreign languages and literature and received numerous awards. Nick then continued his education at IIT Chicago-Kent College of Law, graduating cum laude.\n\nNick, a 7th year practicing lawyer and attorney, lives in Chicago in the Lakeview/Lincoln Park neighborhood working for the law firm of Dykema Gossett PLLC’s Chicago office after four years at Kirkland & Ellis, LLP. Nick is also a Level 4 USA Certified USA Hockey coach."
    },
    {
        "name": "Oliver Freij",
        "team": "Varsity Gold",
        "title": "Goaltending Director and Coach",
        "bio": "Oliver has been coaching goalies since 2007 after his own retirement. He spent four years as the Goaltending Director for the CSDHL Falcons Hockey Association. In his four seasons as a Director, he moved 19 goalies on to higher levels (Tier 1, Prep, Juniors) and had two goalies make the Chicago Brick team. He helped the Falcons win their first USA Hockey National Championship and finish as finalist two other times.\n\nOliver is currently in his first year as the Goaltending Development Coordinator for USA Hockey in Illinois to help grow goaltending in the State. His other coaching responsibilities include Serving as an assistant coach for the Chicago Mission Midget U15 (2006) and Bantam Minor (2008 teams). In his two years at the Mission, he had a goaltender move onto USA National Development Camp and helped the 2006 team reach the quarterfinals at Nationals in 2021. He helps various camps including the CCM Selects, CCM 68, and NSHDA.\n\nHis teaching philosophy is driven by building a strong detailed technical foundation and using situational examples based on his experience at the Minor Pro, Collegiate, and Junior level. He is keen on a relationship building approach to help teach the goalies as individuals and maximize their potential. Over the past five seasons in Chicago more than 10 of his private students have been selected to the Tier 1 level and various Junior levels including the OHL.\n\nOliver attended the University of Utah and achieved a Bachelor of Science degree in Strategic Communication. He played four years for the university’s club team and was regularly summoned to duty for the ECHL (AA level pro) Utah Grizzlies as their emergency backup and practice goaltender after his collegiate career concluded. He currently serves as an emergency backup for the Chicago Blackhawks.\n\nOliver is an avid sports and music fan who enjoys playing soccer and attending concerts when he is outside the rink. He is 34, originally from San Francisco, CA and grew up in Salt Lake City, UT. He currently resides in Chicago, IL."
    },
    {
        "name": "Zach Loesch",
        "team": "Varsity Maroon",
        "title": "Varsity Maroon Head Coach",
        "bio": "Zach brings a strong background of high-level playing experience, leadership, and player development to the bench. Loesch grew up playing youth hockey in Minnesota before advancing to White Bear Lake High School, where he played for the Bears. Following high school, Loesch started his junior career with the Fresno Monsters in the NAHL before moving to the Pembroke Lumber Kings of the CCHL. During his time with Pembroke, the Lumber Kings won the 2011 Royal Bank Cup National Championship and a 2011-2012 CCHL regular season title after posting an impressive 51-9 record.\n\nLoesch went on to play four seasons of NCAA Division 1 hockey at Lake Superior State University from 2012-2016 while earning his Bachelor's degree in Marketing. After college, Loesch continued his playing career professionally in the Southern Professional Hockey League with the Pensacola Ice Flyers an the Columbus Cottonmouths before transitioning into coaching.\n\nLoesch began his coaching career in 2017 in his hometown of White Bear Lake, Minnesota, coaching the Bantam AA level. Since relocating to the Chicago area, he has continued developing youth hockey players with the Northbrook Bluehawks and most recently the Chicago Jets. His coaching style emphasizes accountability, compete level, skill development, and creating an environment where players can grow both on and off the ice. Outside of hockey, Loesch works for Medtronic as a Therapy Expansion Leader within the Cardiac Rhythm Management division. Zach lives in Chicago with his wife Jada and dog Charlie."
    },
    {
        "name": "Sean Markovitz",
        "team": "Varsity Maroon",
        "title": "Varsity Maroon Associate Head Coach",
        "bio": "Sean Markovitz is entering his fifth year with the Saint Ignatius Wolfpack coaching staff as a Varsity Maroon Assistant Coach, and sixth year coaching overall. Sean is a St. Louis native, he grew up playing hockey locally and spent four years playing varsity hockey at Eureka HS. He went on to play DIII club hockey at the University of Notre Dame while earning a Bachelor’s of Science in Chemistry. After graduating, Sean moved to Kalamazoo, Michigan where he served as an Assistant Varsity Coach for the Portage Muskies for three years. He is a Level 2 certified USA Hockey Coach. Off the ice, Sean is a Brand Analyst at Ferrara Candy Company."
    },
    {
        "name": "Cory Scull",
        "team": "Varsity Maroon",
        "title": "Varsity Maroon Assistant Coach",
        "bio": "Cory is entering his first year with the Wolfpack. Cory brings experience as both a player and coach at multiple levels of the game. Originally from Buffalo, New York, Cory grew up playing hockey locally and progressed through in-house, AA, AAA, high school, Tier III junior hockey, and ACHA Division I at Mercyhurst University. Throughout his playing career, Cory served as captain of both his high school and Mercyhurst teams and was a member of the 2019 NA3HL Championship team with the Texas Brahmas. On the coaching side, he recently served as an assistant coach for the Chicago Jets Squirt Prospects, helping lead the team to a division championship. Cory currently works as Hockey Director at Blackhawks Ice Center and has a USA Hockey Level 2 Coaching Certification."
    },
    {
        "name": "David Rutkowski",
        "team": "Junior Varsity",
        "title": "Junior Varsity Head Coach",
        "bio": "David Rutkowski is entering his third year as Junior Varsity Head Coach with the Wolfpack after spending two seasons as Junior Varsity Head Coach and Varsity Assistant at OPRF. David began his coaching career in 2020 as an assistant Junior Varsity coach at Buffalo Grove, Hersey, Wheeling Hockey club for two years.\n\nDavid grew up in Park Ridge, Illinois and played youth hockey at various Central States travel clubs. During his senior year of high school, David became the assistant captain of the Chicago Bulldogs in NA3HL. Following high school, David played ACHA D-1, D-2 and D-3 hockey at Iowa State University Cyclones and was a runner up ACHA D-1 National Champion in 2019.\n\nIn 2020, David graduated from Iowa State University with a degree in Finance. David resides in Chicago in the Bucktown neighborhood. He works for Harbor Capital Advisors as an internal wholesaler. In his free time, David continues to play hockey at Johnny’s Ice House, watching the Blackhawks and playing golf."
    },
    {
        "name": "Gregory Lewis",
        "team": "Junior Varsity",
        "title": "Junior Varsity Associate Head Coach",
        "bio": "Gregory Lewis is in his third year with the Wolfpack as an Assistant Coach with our Junior Varsity after spending the previous two seasons as the Junior Varsity Assistant Coach at St. Charles Prep in Columbus, OH. During his last season as Assistant Coach with St. Charles Prep, the team won the Capital District Hockey Regular season title and made it to the final four of the Varsity B/ Junior Varsity State Tournament. Prior to St. Charles Gregory coached six years of minor hockey in Central Ohio. A native of Pittsford, NY, Gregory played for several youth travel teams. He also played four years of Varsity hockey for Pittsford High School, serving as a team captain his senior year. Coach Lewis lives in Lincoln Park and retired from a career in the financial services industry. Gregory is Level 4 certified USA Hockey coach."
    },
    {
        "name": "Anthony Nguyen",
        "team": "Junior Varsity",
        "title": "Junior Varsity Assistant Coach",
        "bio": "Anthony Nguyen is entering his second year of coaching with Saint Ignatius after head coaching with the Chicago Stallions for three years. Prior to the Stallions, Anthony was a voluntary head coach with the non-profit organization Inner City Education in Chicago. Anthony is a level 5 certified USA hockey coach and works with Ford Hockey School. Anthony played varsity high school hockey as a forward and played defense for his club team at the University of Michigan. Anthony eventually picked up goaltending in 2020 and currently plays in adult leagues as a defenseman and goalie.\n\nAnthony graduated from Michigan with a degree in Philosophy and went to law school at Chicago-Kent College of Law. Anthony was an attorney at Jenner & Block for 8 years, was the Inspector General for a state agency for two years, and is now litigation senior counsel at Katten & Temple LLP. Anthony is also a staff photographer for Chicago Theatre and the Riot Fest music festival. Anthony lives in the Hermosa neighborhood of Chicago with his partner and two ridiculous cats."
    }
];