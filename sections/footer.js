export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          Kontakt: &nbsp;
          <a href="mailto:kontakt@savediversity.de" className="text-indigo-600">
            kontakt@savediversity.de
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1 flex flex-col">
          <p className="text-center text-base text-gray-400">
            &copy; 2021 SAVEDiversity
          </p>
          <p>
            <a href="/impressum" className="hover:underline">
              Impressum
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
