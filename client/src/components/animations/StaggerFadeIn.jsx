import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each item
      delayChildren: 0.1,    // Initial delay before staggering starts
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 60, 
      damping: 15 
    }
  }
};

/**
 * A container that handles the intersection observer and staggering its children.
 * Wrap your list or grid with this component.
 */
export const StaggerContainer = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }} // Triggers when 10% is visible, only once
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * An individual item within the StaggerContainer.
 * Wrap each iterated element with this.
 */
export const StaggerItem = ({ children, className = "" }) => {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
