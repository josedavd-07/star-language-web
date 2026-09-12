export interface DocSection {
    title: string;
    slug: string;
    content: string;
}

export const DOCS_CONTENT: DocSection[] = [
    { title: 'Introduction', slug: 'intro', content: `# Welcome to Star
Star is Moon Technologies' space-themed programming language. This guide helps you install the compiler, create a project, run it, and find the official tools.

## What is included
- **Star** is the language and compiler.
- **StarPackages** provides installation paths for Linux, Windows, and macOS.
- **Star Studio** adds syntax highlighting and project tools for VS Code.

## Start here
1. Download the current Star release for your operating system.
2. Install it using the platform instructions.
3. Verify the compiler and create your first project.

Use the **Download Star** link in the sidebar whenever you need a published package.` },
    { title: 'Download & install', slug: 'install', content: `# Download and install Star
The official Releases page contains published Star packages. StarPackages contains the maintained installation guidance for every supported operating system.

## Linux
For Debian or Ubuntu, download the published \`.deb\` asset and install it locally:

\`\`\`bash
sudo apt install ./star-language_1.1.0_amd64.deb
\`\`\`

Portable Linux packages include an installation script. Extract the archive, enter its folder, and run \`./install.sh\`.

## Windows
Download the Windows x64 ZIP from Releases, extract it, and verify the compiler:

\`\`\`powershell
StarCompiler.exe --version
\`\`\`

## macOS
Download the Apple Silicon ZIP from Releases, extract it, then run:

\`\`\`bash
chmod +x StarCompiler
./StarCompiler --version
\`\`\`

Open StarPackages from the sidebar for the latest platform instructions.` },
    { title: 'Your first app', slug: 'first-project', content: `# Create and run your first app
Once Star is installed, use the CLI to check the installation, scaffold a console project, and run it.

## Verify Star
\`\`\`bash
star --version
\`\`\`

## Create and run a console project
\`\`\`bash
star new console MissionControl
cd MissionControl
star run
\`\`\`

The command creates a project with \`src/Main.st\` and \`MissionControl.starproj\`. Open that folder in VS Code and edit \`src/Main.st\`.

## Your Main.st file
Replace the contents of \`src/Main.st\` with this program:

\`\`\`star
StarName MissionControl.Core;

StarFunction Main() {
    EmitLn("Bienvenido a Star: MissionControl");
}
\`\`\`

Run \`star run\` again from the \`MissionControl\` folder. The message appears in the terminal.

## Build an artifact
Use \`star build\` when you want to compile without running the program.

\`\`\`bash
star build
\`\`\`

The CLI also supports experimental web and desktop templates. Consult the Star repository for current target support.` },
    { title: 'Object-oriented programming', slug: 'language', content: `# Program with objects
Star supports object-oriented programming. A \`Constellation\` is a class; it can hold properties, a constructor, and functions (methods).

## Create an object
\`\`\`star
StarName MissionControl.Core;

Constellation Rocket {
    Public Property String Name;

    Public StarFunction Constructor(String name) {
        this.Name = name;
    }

    Public StarFunction Launch() {
        EmitLn(this.Name + " launched!");
    }
}

StarFunction Main() {
    Rocket ship = new Rocket("Aurora");
    ship.Launch();
}
\`\`\`

## How it works
- **Constellation Rocket** creates the \`Rocket\` type.
- **Property String Name** stores the rocket name.
- **Constructor** runs when \`new Rocket("Aurora")\` creates an object.
- **Launch** is a method called with \`ship.Launch()\`.

Save the file and run \`star run\` in your project folder to execute it.

## More language tools
Use **When**, **Otherwise**, **Orbit**, and **While** for control flow. Use **Galaxy** for collections and related operations.` },
    { title: 'Star Studio', slug: 'studio', content: `# Star Studio for VS Code
Star Studio provides syntax highlighting, semantic tokens, commands, and the Star Nebula theme for Visual Studio Code.

## Install the extension
Use the **VS Code extension** link in the sidebar to install the official extension from the Visual Studio Marketplace.

## Keep tools aligned
When you upgrade the compiler, check the Star Studio repository for compatible tooling updates, issue tracking, and development information.` },
    { title: 'Packages & releases', slug: 'packages', content: `# Packages and releases
Use the official project surfaces together:

1. **Star Releases** — download published compiler packages and review version notes.
2. **StarPackages** — follow maintained installation instructions for your operating system.
3. **Star repository** — read compiler documentation, language examples, and roadmap details.
4. **Star Studio** — install editor support for VS Code.

This keeps your compiler, installation method, and editor tooling connected to the sources maintained by Moon Technologies.` }
];
