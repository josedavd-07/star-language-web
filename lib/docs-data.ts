export interface DocSection {
    title: string;
    slug: string;
    content: string;
}

export const DOCS_CONTENT: DocSection[] = [
    {
        title: "Introduction",
        slug: "intro",
        content: `# Welcome to Star Language
Star is a modern, space-themed programming language designed for visual elegance and structural power.
Reach for the stars with binary-speed performance and astronomical syntax.

## Why Star?
- **Native Performance**: Compiles to standalone binaries via .NET AOT.
- **Space-Themed**: Logic flows through orbits and constellations.
- **Developer First**: Professional CLI for scaffolding and management.

---

## Quick Start (Hello Galaxy)
Create a file named \`Main.st\`:
\`\`\`star
StarName Galaxy.Hello;

StarFunction Main() {
    EmitLn("🚀 Ignition sequence start!");
    EmitLn("Star is officially in orbit.");
}
\`\`\``
    },
    {
        title: "Installation",
        slug: "install",
        content: `# Installation Guide
Get started with Star on your preferred operating system.

## 🐧 Linux (Debian/Ubuntu)
Run our automated installation script:
\`\`\`bash
curl -fsSL https://josedavd-07.github.io/star-apt-repo/install.sh | sudo bash
\`\`\`

This will download and install the latest version of Star Language.

## 🪟 Windows (PowerShell)
Execute the following in a PowerShell window:
\`\`\`powershell
iwr https://josedavd-07.github.io/star-apt-repo/install-windows.ps1 -useb | iex
\`\`\`

## 🍎 macOS (Homebrew)
Install directly via Homebrew:
\`\`\`bash
brew tap josedavd-07/star-apt-repo
brew install star
\`\`\`

## CLI Verification
\`\`\`bash
star --version
\`\`\`

---

## 🧹 Cleanup (If you had previous installation errors)
If you previously tried to install and got errors, clean up first:
\`\`\`bash
sudo rm /etc/apt/sources.list.d/star-language.list
sudo apt update
\`\`\`

Then run the installation command above.

---

## 🚀 Getting Started

### Create Your First Project
\`\`\`bash
star new MyFirstGalaxy
cd MyFirstGalaxy
\`\`\`

### Run Your Code
\`\`\`bash
star run
\`\`\`

### Build an Executable
\`\`\`bash
star build
\`\`\``
    },
    {
        title: "Variables & Types",
        slug: "types",
        content: `# Variables and Types
Star uses static typing for safety and performance.

### Primitive Types
- **Int**: 64-bit integers.
- **String**: UTF-8 character sequences.
- **Bool**: Boolean values (\`true\` or \`false\`).
- **Nova**: Absence of value (equivalent to void).

### Declarations
\`\`\`star
Int planetas = 8;
String sistema = "Solar";
Bool habitado = true;
\`\`\``
    },
    {
        title: "Control Flow",
        slug: "flow",
        content: `# Control Flow
Guide your mission through logic gates.

## Conditionals
\`\`\`star
When (fuel > 10) {
    EmitLn("Safe to launch");
} Otherwise {
    EmitLn("Refuel required");
}
\`\`\`

## Loops
### Orbit (For)
\`\`\`star
Orbit (Int i = 0; i < 5; i = i + 1) {
    EmitLn("Scanning quadrant " + i);
}
\`\`\`

### While
\`\`\`star
While (orbitCount < 10) {
    EmitLn("Orbiting...");
    orbitCount = orbitCount + 1;
}
\`\`\``
    },
    {
        title: "Constellations (Classes)",
        slug: "oop",
        content: `# Constellations
Object-oriented programming in Star is centered around **Constellations**.

## Structure
\`\`\`star
Constellation Spaceship {
    Public String Name;
    Private Int Fuel = 100;

    Public StarFunction Launch() {
        When (Fuel > 0) {
            EmitLn(Name + " is launching!");
        }
    }
}
\`\`\`

### Inheritance
Constellations can inherit from each other to build complex systems.

\`\`\`star
Constellation Rocket : Spaceship {
    Public Int ThrusterCount = 4;
}
\`\`\``
    },
    {
        title: "CLI Reference",
        slug: "cli",
        content: `# CLI Reference
The \`star\` command-line interface is your mission control.

- **star new <name>**: Create a new Star project (constellation).
- **star run [file.st]**: Execute the current project mission.
- **star build [file.st]**: Compile into a standalone binary for deployment.
- **star help**: Show navigation guide for all commands.
- **star --version**: Check compiler version.`
    }
];
