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
}
\`\`\``
    },
    {
        title: "Installation",
        slug: "install",
        content: `# Installation Guide
Get started with Star on your preferred operating system using our official repository.

## 🐧 Linux (Debian/Ubuntu)
Run our automated installation script:
\`\`\`bash
curl -fsSL https://josedavd-07.github.io/star-apt-repo./install.sh | sudo bash
\`\`\`

## 🪟 Windows (PowerShell)
Execute the following in a PowerShell window:
\`\`\`powershell
iwr https://josedavd-07.github.io/star-apt-repo./install-windows.ps1 -useb | iex
\`\`\`

## 🍎 macOS (Homebrew)
Install directly via Homebrew:
\`\`\`bash
brew tap josedavd-07/star-apt-repo.
brew install star
\`\`\`

## CLI Verification
\`\`\`bash
star --version
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
} Else {
    EmitLn("Refuel required");
}
\`\`\`

## Loops
### While
\`\`\`star
While (orbitCount < 10) {
    EmitLn("Orbiting...");
    orbitCount = orbitCount + 1;
}
\`\`\`

### For
\`\`\`star
For (Int i = 0; i < 5; i = i + 1) {
    EmitLn("Scanning quadrant " + i);
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
        If (Fuel > 0) {
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

- **star new <name>**: Create a new Star project.
- **star run**: Execute the current project mission.
- **star build**: Compile into a standalone binary.
- **star --version**: Check compiler version.`
    }
];
