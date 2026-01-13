import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  console.log('Clients component rendering', clients);

  return (
    <section id="client" className={`${styles.paddingY} my-10`}>
      <div className="w-full mb-10">
        <h1 className='font-poppins font-semibold text-white text-[32px] leading-[40px] text-center mb-4'>
          You're in good company
        </h1>
        <p className={`${styles.paragraph} text-center max-w-[600px] mx-auto`}>
          We partner with leading companies in the energy sector
        </p>
      </div>

      <div className={`${styles.flexCenter} flex-wrap w-full gap-8`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex items-center justify-center p-4 bg-white/5 rounded-lg min-w-[150px]"
          >
            <img
              src={client.logo}
              alt={`client-${client.id}`}
              className="w-[150px] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
