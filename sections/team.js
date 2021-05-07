const people = [
  {
    name: "Marie Rathmayer",
    imageUrl: "/images/team-marie.jpg",
  },
  {
    name: "Veronika Kriz",
    imageUrl: "/images/team-member.svg",
  },
  {
    name: "Anne Lewerentz",
    imageUrl: "/images/team-anne.jpg",
  },
  {
    name: "Fabio Maienschein",
    imageUrl: "/images/team-fabio.jpg",
  },
];

export default function Team() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Das Team hinter SAVEDiversity
            </h2>
            <p className="text-xl text-gray-500">
              Das Team kam erstmals als Teil der Innovation Challenge
              #FutureTech4Climate 2020 zusammen und arbeitet seither an Ideen
              und Konzepten, das Thema der Biodiversität mehr in die
              Aufmerksamkeit jedes Einzelnen zu rücken.
            </p>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-center">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <img
                      className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3>{person.name}</h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
