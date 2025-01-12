'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Zapperdax' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/qasim-ahmed-5779281a3' },
  { name: 'Email', icon: Mail, url: 'mailto:qasimisdev@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-600 to-green-400 text-muted-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div 
            className="flex space-x-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={24} />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            className="text-md font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {new Date().getFullYear()} Qasim Ahmed. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

