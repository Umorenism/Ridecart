
import {motion} from 'framer-motion'
const AboutUs = () => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are a passionate team dedicated to delivering innovative solutions that empower businesses and individuals.
        </p>
      </motion.div>
    );
    export default AboutUs