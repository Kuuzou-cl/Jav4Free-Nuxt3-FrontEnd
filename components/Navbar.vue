<template>
    <nav class="navbar navbar-expand-md">
        <div class="container">
            <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item px-2">
                        <div class="nav-container px-2">
                            <NuxtLink to="/recommended/1" tag="a" class="nav-link text" data-text="Recommended">
                                Recommended
                            </NuxtLink>
                        </div>
                    </li>
                    <li class="nav-item px-2">
                        <div class="nav-container px-2">
                            <NuxtLink to="/javs/1" tag="a" class="nav-link text" data-text="Newest">
                                Newest
                            </NuxtLink>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="mx-auto px-5 order-0">
                <NuxtLink to="/" tag="a" class="navbar-brand mx-auto">
                    <img src="~/assets/img/j4f-logo-black2.png" />
                </NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".dual-collapse2">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item px-2">
                        <div class="nav-container px-2">
                            <NuxtLink to="/idols/1" tag="a" class="nav-link text" data-text="Idols">
                                Idols
                            </NuxtLink>
                        </div>
                    </li>
                    <li class="nav-item px-2">
                        <div class="nav-container px-2">
                            <NuxtLink to="/categories" tag="a" class="nav-link text" data-text="Categories">
                                Categories
                            </NuxtLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>