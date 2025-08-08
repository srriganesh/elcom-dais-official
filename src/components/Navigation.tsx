import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Members", href: "#members" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left - ELCOM DAIS logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/assets/logos/elcom-dais-logo.png"
              alt="ELCOM DAIS Logo"
              className="w-10 h-10 object-contain filter brightness-0 invert"
            />
            <span className="text-xl font-bold text-glow

              
  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Members", href: "#members" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">

          {/* Left - ELCOM DAIS logo */}
          <div className="flex items-center space-x-3 z-10">
            <img
              src="/assets/logos/elcom-dais-logo.png"
              alt="ELCOM DAIS Logo"
              className="w-10 h-10 object-contain filter brightness-0 invert"
            />
            <span className="text-xl font-bold text-glow">ELCOM DAIS</span>
          </div>

          {/* Center - SASTRA logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center z-0">
            <img
              src="/assets/logos/sastra-university-logo.png"
              alt="SASTRA University Logo"
              className="w-24 h-24 object-contain filter brightness-0 i
