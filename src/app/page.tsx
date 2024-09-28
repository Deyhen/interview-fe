import CountryList from "@/components/countryList/countryList.component";


const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold text-center mb-8">Country Info App</h1>
      <CountryList />
    </div>
  );
};

export default Home;