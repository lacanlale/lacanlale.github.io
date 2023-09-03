// Load project data from projects.json
fetch("./projects.json")
    .then(response => response.json())
    .then(data => {
        const projectContainer = document.querySelector(".container.skillsdelt");
        let projectsHTML = '';

        data.forEach(project => {
            const projectHTML = `
                <!-- Replace placeholders with project data -->
                <!-- Use the modularized templates here -->
            <div class="container skillsdelt mx-auto pt-16">
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-1/2" id="leftSection">
                        <div class="flex flex-col h-full p-10 left_sec ">
                            <div class="mb-4 mt-4">
                                <h4 style="color: #64f4ab;" style=" font-family:monospace;" class="text-lg font-bold">
                                    ${project.project_type}
                                </h4>
                            </div>
                            <div class="mb-4 mt-4">
                                <h2 class="text-5xl text-white font-bold" style="font-family:monospace;">
                                    ${project.project_title}
                                </h2>
                            </div>
                            <div class="mb-4 mt-4">
                                <p class="text-white text-lg" style="font-family:monospace;">
                                    ${project.project_description}
                                </p>
                            </div>
                            <div class="flex items-center">
                                <a href=${project.link_url} class="flex items-center text-white text-yellow-500">
                                    <span class=" mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10.998"
                                            viewBox="0 0 18 10.998">
                                            <g id="right_arrow_-_icon" data-name="right arrow - icon"
                                                transform="translate(21 -6.501) rotate(90)">
                                                <path id="Path_98" data-name="Path 98"
                                                    d="M6.59,11.858a.714.714,0,0,0,.627.38h4.066v8.028a.717.717,0,1,0,1.434,0V12.238h4.066a.713.713,0,0,0,.627-.38.748.748,0,0,0-.02-.745l-4.783-7.77a.709.709,0,0,0-1.214,0L6.61,11.113A.754.754,0,0,0,6.59,11.858Z"
                                                    fill="#fecd1a" />
                                            </g>
                                        </svg></span>
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 anime" id="rightSection">
                        <div class="flex justify-center items-center h-full">
                            <div class="w-3/4">
                                <img style="border-radius: 30px;"
                                    src="${project.image_source}"
                                    alt="Image" class="w-full h-auto rounded-lg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            projectsHTML += projectHTML;
        });
        projectContainer.innerHTML = projectsHTML;
    })
    .catch(error => console.error("Error loading project data:", error));
