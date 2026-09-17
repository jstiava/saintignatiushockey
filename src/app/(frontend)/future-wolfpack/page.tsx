'use client'


import {
    CalendarDays,
    Clock3,
    MapPin,
    Users,
    ShieldCheck,
    Trophy,
    ArrowRight,
    Snowflake,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"


const SKATE_PROGRAM_DATES = [
    {
        label: "7th-8th Grade Skate & Program Introduction",
        description: "Skate with the Wolfpack, meet our coaches and captains, and watch Varsity Gold compete.",
        date: "Saturday, November 15, 2026",
        time: "6:30 PM - 7:30 PM",
        theme: "primary",
        isRsvp: true,
        rsvpMessage: "RSVP today, (5 spots remaining)"
    },
    {
        label: "Middle School Summer Prospects Camp",
        description: "Five days of on-ice instruction, off-ice workouts, video sessions, and speakers.",
        date: "5-day program in mid-June",
        // time: "11:15 AM – 4:00 PM",
        theme: "secondary",
        isRsvp: false,
    },
    {
        label: "Summer Goalie Skills Camp",
        description: "Free goalie clinics focused on skating, technique, positioning, and game situations.",
        date: "2 dates in Mid-June",
        // time: "4:00 PM – 5:00 PM",
        theme: "secondary",
        isRsvp: false,
    }
]

export default function ProspectsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">


            {/* Hero */}
            <section className="border-b bg-dark-maroon text-white">

                <div className="flex flex-col items-center mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-28">

                    <div className="flex flex-col items-center gap-0 px-12">

                        <h1 className="text-4xl font-qb font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Future Wolfpack
                        </h1>

                        <p className="max-w-[40rem] mt-6 text-md leading-snug text-center">
                            Welcome prospective 7th and 8th grade students and their families. Come skate with our coaches and current team captains. Refreshments provided for parents. After the practice, coaches will present to parents.
                        </p>
                    </div>

                    {/* Events */}
                    <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">

                        {SKATE_PROGRAM_DATES.map(event => {

                            return (
                                <Card key={event.label} className={cn(
                                    "text-left transition-shadow bg-muted/10 h-fit ",
                                    event.theme == 'primary' ? "bg-white text-black border" : "bg-muted/10 border text-white"
                                )}>
                                    <CardHeader>
                                        <span className="text-xs">{event.date}</span>
                                        <CardTitle className="mt-2 font-qb">{event.label}</CardTitle>
                                        <span className="text-xs">{event.time}</span>
                                    </CardHeader>

                                    <CardContent className="flex flex-col gap-2 w-full h-fit">
                                        <span className="text-xs">{event.description}</span>

                                        <div className="flex flex-col w-full h-fit mt-6 gap-2">
                                            {event.isRsvp && (
                                                <Button {...{
                                                    variant: 'default',
                                                    className: ' h-9 text-xs'
                                                }} >{event.rsvpMessage}</Button>
                                            )}
                                            <Button {...{
                                                variant: 'link',
                                                className: 'w-fit px-0 text-inherit underline text-xs'
                                            }} >Learn More</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}

                    </div>
                </div>
            </section>


            {/* Meet the Coaches */}
            <section className="border-t bg-background">
                <div className="w-full flex flex-col px-2 py-20 lg:px-4 lg:py-24">

                    <div className="mx-auto max-w-2xl text-center">

                        <h2 className="mt-3 text-3xl font-qb tracking-tight sm:text-4xl">
                            Meet the Coaches
                        </h2>

                        <p className="max-w-[40rem] mt-6 text-md leading-snug text-center">
                            Get to know the coaches who lead, develop, and support
                            our players on and off the ice.
                        </p>
                    </div>

                    <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {COACHES.map(coach => {

                            return (
                                <Card className="overflow-hidden ">
                                    <div {...{
                                        className: 'flex items-center justify-center w-full aspect-[3/4] bg-[grey] rounded-xs'
                                    }}>
                                        <div className='flex bg-contain bg-no-repeat w-20 aspect-[3/4] h-fit bg-center opacity-15 grayscale' style={{
                                            backgroundImage: `url("/media/teams/ignatius-1.png")`
                                        }} />
                                    </div>

                                    <CardHeader>
                                        <div className="flex flex-col gap-1 py-4">
                                            <span className='font-qb text-lg leading-tight pr-4'>{coach.name}</span>
                                            <span className='font-sans text-sm leading-tight'>{coach.title}</span>
                                        </div>
                                    </CardHeader>

                                    <CardContent>
                                        <p className="text-sm leading-6 text-muted-foreground">
                                            Leads the Saint Ignatius hockey program and works
                                            with players throughout the Wolfpack program.
                                        </p>
                                    </CardContent>
                                </Card>
                            )
                        })}

                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-sm text-muted-foreground">
                            Meet the Wolfpack coaching staff at our upcoming events.
                        </p>
                    </div>

                </div>
            </section>



            {/* 7 / 8 Grade Skate */}
            <section id="skate" className="scroll-mt-20">
                <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
                        <div>
                            <SectionEyebrow>
                                Prospective Students
                            </SectionEyebrow>

                            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                                7 / 8 Grade Skate
                            </h2>

                            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                                This is an opportunity for prospective students of Saint
                                Ignatius College Prep and interested hockey players and
                                families to come out and skate, meet the coaches and our
                                captains, and enjoy the fun watching our teams compete against
                                other Chicago area High Schools!
                            </p>

                            <div className="mt-10 grid gap-4 sm:grid-cols-2">
                                <EventCard
                                    icon={<MapPin />}
                                    label="Where"
                                    title="Blackhawk Ice Center"
                                    description="1801 W Jackson Blvd, Chicago, IL"
                                />

                                <EventCard
                                    icon={<Users />}
                                    label="Ages"
                                    title="Current 7th & 8th Grade"
                                    description="Prospective students and hockey players"
                                />

                                <EventCard
                                    icon={<CalendarDays />}
                                    label="Date"
                                    title="Sunday, November 15, 2026"
                                    description="Blackhawk Ice Center"
                                />

                                <EventCard
                                    icon={<Clock3 />}
                                    label="7/8 Grade Skate"
                                    title="6:30 PM – 7:30 PM"
                                    description="USG Arena"
                                />
                            </div>

                            {/* Meet the Coaches */}
                            <Card className="mt-6">
                                <CardHeader>
                                    <div className="flex gap-4">
                                        <IconBox>
                                            <Users />
                                        </IconBox>

                                        <div>
                                            <CardTitle className="text-base">
                                                Meet the Coaches
                                            </CardTitle>

                                            <CardDescription className="mt-1">
                                                7:30 PM – 8:00 PM · USG Arena, Party Deck
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="pt-0">
                                    <p className="text-sm leading-6 text-muted-foreground">
                                        Players and parents will have an opportunity to meet
                                        Coaches, Varsity Gold Captains, as well as one of our
                                        Alumni players.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Important */}
                            <Alert className="mt-6">
                                <ShieldCheck className="size-4" />

                                <AlertTitle>Important</AlertTitle>

                                <AlertDescription>
                                    <ul className="mt-2 list-disc space-y-1 pl-5">
                                        <li>
                                            Player must have a USA Hockey Registration for the
                                            2026–2027 season.
                                        </li>
                                        <li>
                                            All players must wear FULL equipment.
                                        </li>
                                    </ul>
                                </AlertDescription>
                            </Alert>
                        </div>

                        {/* Event Summary */}
                        <div>
                            <Card className="lg:sticky lg:top-6">
                                <CardHeader>
                                    <Badge className="w-fit">
                                        November 15, 2026
                                    </Badge>

                                    <CardTitle className="mt-2 text-2xl">
                                        7 / 8 Grade Skate
                                    </CardTitle>

                                    <CardDescription>
                                        Blackhawk Ice Center
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="space-y-4">
                                        <Detail
                                            icon={<CalendarDays />}
                                            label="Date"
                                            value="Sunday, November 15, 2026"
                                        />

                                        <Detail
                                            icon={<Clock3 />}
                                            label="Skate"
                                            value="6:30 PM – 7:30 PM"
                                        />

                                        <Detail
                                            icon={<Users />}
                                            label="Meet the Coaches"
                                            value="7:30 PM – 8:00 PM"
                                        />

                                        <Detail
                                            icon={<MapPin />}
                                            label="Location"
                                            value="USG Arena"
                                        />
                                    </div>

                                    <Separator className="my-6" />

                                    <p className="text-sm font-medium">
                                        Blackhawk Ice Center
                                    </p>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        1801 W Jackson Blvd
                                        <br />
                                        Chicago, IL
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Game Schedule */}
            <section className="border-y bg-muted/30">
                <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
                    <div className="flex items-center gap-3">
                        <IconBox>
                            <Trophy />
                        </IconBox>

                        <div>
                            <SectionEyebrow>November 15</SectionEyebrow>

                            <h2 className="text-2xl font-bold">
                                Game Schedule
                            </h2>
                        </div>
                    </div>

                    <Card className="mt-6 overflow-hidden">
                        <CardContent className="p-0">
                            <div className="grid items-center gap-5 p-6 sm:grid-cols-[100px_1fr_auto]">
                                <div>
                                    <p className="text-2xl font-bold">
                                        4:30
                                    </p>

                                    <p className="text-sm text-muted-foreground">
                                        PM
                                    </p>
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        Saint Ignatius Varsity Gold
                                    </p>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        vs Brother Rice
                                    </p>
                                </div>

                                <Badge variant="outline" className="w-fit">
                                    USG Arena
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>

                    <p className="mt-4 text-sm text-muted-foreground">
                        Blackhawk Ice Center · 1801 W Jackson Blvd, Chicago, IL
                    </p>
                </div>
            </section>

            {/* Middle School Prospects Camp */}
            <section id="camp" className="scroll-mt-20">
                <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
                        <div>
                            <SectionEyebrow>
                                Summer Hockey
                            </SectionEyebrow>

                            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                                Middle School Prospects Camp
                            </h2>

                            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                                This is an opportunity for hockey players that are rising
                                5th through 8th Graders to take part in a 5 day camp with
                                Coach Spencer Montgomery and his host of coaches.
                            </p>

                            <div className="mt-10 grid gap-4 sm:grid-cols-2">
                                <EventCard
                                    icon={<CalendarDays />}
                                    label="Dates"
                                    title="June 15–19, 2026"
                                    description="Five-day camp"
                                />

                                <EventCard
                                    icon={<Clock3 />}
                                    label="Time"
                                    title="11:15 AM – 4:00 PM"
                                    description="Daily"
                                />
                            </div>

                            <Card className="mt-6">
                                <CardHeader>
                                    <CardTitle className="text-base">
                                        Camp Includes
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        {[
                                            "On Ice Instruction",
                                            "Off Ice Workouts",
                                            "Video Sessions",
                                            "Speaker Sessions",
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="rounded-md border bg-muted/40 px-4 py-3 text-sm"
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="mt-8 space-y-4 text-muted-foreground">
                                <p>
                                    We hope you come out and join us and have some fun!
                                </p>

                                <p>
                                    Registration is simple, just click the Register button on
                                    this page. Camp fee will be collected during the
                                    registration. Check and Credit Card are accepted.
                                </p>
                            </div>
                        </div>

                        <Card className="h-fit lg:sticky lg:top-6">
                            <CardHeader>
                                <Badge variant="secondary" className="w-fit">
                                    June 15–19, 2026
                                </Badge>

                                <CardTitle className="text-2xl">
                                    Prospects Camp
                                </CardTitle>

                                <CardDescription>
                                    Rising 5th through 8th Graders
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <div className="space-y-4">
                                    <Detail
                                        icon={<CalendarDays />}
                                        label="Dates"
                                        value="June 15–19, 2026"
                                    />

                                    <Detail
                                        icon={<Clock3 />}
                                        label="Time"
                                        value="11:15 AM – 4:00 PM"
                                    />

                                    <Detail
                                        icon={<Users />}
                                        label="Who"
                                        value="Rising 5th–8th Graders"
                                    />
                                </div>

                                <Separator className="my-6" />

                                <Button className="w-full" size="lg">
                                    Register
                                    <ArrowRight className="ml-2 size-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Goalie Clinics */}
            <section className="border-t bg-muted/30">
                <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
                    <SectionEyebrow>
                        Wolfpack Development
                    </SectionEyebrow>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        Wolfpack FREE Goalie Clinics
                    </h2>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                        An opportunity for middle school-aged Goaltenders to meet the
                        staff of the Wolfpack while honing their skills in the summer.
                    </p>

                    {/* Instructors */}
                    <div className="mt-12">
                        <h3 className="text-xl font-semibold">
                            Instructors
                        </h3>

                        <div className="mt-5 grid gap-4 md:grid-cols-3">
                            <InstructorCard
                                name="Oliver Freij"
                                role="Saint Ignatius Goalie Director"
                                detail="Chicago Blackhawks EBUG"
                            />

                            <InstructorCard
                                name="Scott Foster"
                                role="Former D1 goalie at Western Michigan"
                                detail="Chicago Blackhawks EBUG"
                            />

                            <InstructorCard
                                name="Spencer Montgomery"
                                role="Saint Ignatius Hockey Director"
                                detail="Varsity Head Coach"
                            />
                        </div>
                    </div>

                    {/* Dates */}
                    <div className="mt-12">
                        <h3 className="text-xl font-semibold">
                            Clinic Dates
                        </h3>

                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            <ClinicCard date="June 10" />

                            <ClinicCard date="June 24" />
                        </div>
                    </div>

                    {/* Details */}
                    <div className="mt-12 grid gap-4 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">
                                    Who
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p className="text-sm leading-6 text-muted-foreground">
                                    Rising 5th through 8th grade goalies for the
                                    2026–2027 school year.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">
                                    Skill Level
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {["NIHL", "CS", "AA", "AAA"].map((level) => (
                                        <Badge key={level} variant="secondary">
                                            {level}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="md:col-span-2">
                            <CardHeader>
                                <CardTitle className="text-base">
                                    What
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p className="text-sm leading-7 text-muted-foreground">
                                    The hour-long session will focus on skating, technique,
                                    positioning, puck handling, save mechanics, and game
                                    situations.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">
                                    Where
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p className="text-sm leading-6 text-muted-foreground">
                                    Blackhawks Ice Center
                                    <br />
                                    1801 West Jackson Blvd
                                    <br />
                                    Chicago, IL
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">
                                    Cost
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p className="text-3xl font-bold">
                                    FREE
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <Alert className="mt-6">
                        <ShieldCheck className="size-4" />

                        <AlertTitle>
                            Requirements
                        </AlertTitle>

                        <AlertDescription>
                            Current USA Hockey Registration and Full Equipment are
                            Required.
                        </AlertDescription>
                    </Alert>
                </div>
            </section>
        </main>
    )
}

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */

function SectionEyebrow({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {children}
        </p>
    )
}

function IconBox({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
            <div className="size-5 [&>svg]:size-5">
                {children}
            </div>
        </div>
    )
}

function EventCard({
    icon,
    label,
    title,
    description,
}: {
    icon: React.ReactNode
    label: string
    title: string
    description: string
}) {
    return (
        <Card>
            <CardHeader>
                <IconBox>
                    {icon}
                </IconBox>

                <CardDescription className="pt-1">
                    {label}
                </CardDescription>

                <CardTitle className="text-base">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </CardContent>
        </Card>
    )
}

function Detail({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode
    label: string
    value: string
}) {
    return (
        <div className="flex gap-3">
            <div className="mt-0.5 text-muted-foreground [&>svg]:size-4">
                {icon}
            </div>

            <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {label}
                </p>

                <p className="mt-1 text-sm font-medium">
                    {value}
                </p>
            </div>
        </div>
    )
}

function InstructorCard({
    name,
    role,
    detail,
}: {
    name: string
    role: string
    detail: string
}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base">
                    {name}
                </CardTitle>

                <CardDescription>
                    {role}
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Badge variant="outline">
                    {detail}
                </Badge>
            </CardContent>
        </Card>
    )
}

function ClinicCard({
    date,
}: {
    date: string
}) {
    return (
        <Card>
            <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                    <IconBox>
                        <Snowflake />
                    </IconBox>

                    <div>
                        <p className="font-semibold">
                            {date}
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                            4:00 PM – 5:00 PM · USG Arena
                        </p>
                    </div>
                </div>

                <Badge>
                    FREE
                </Badge>
            </CardContent>
        </Card>
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
];