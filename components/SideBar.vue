<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <NuxtLink to="/dashboard" class="sidebar-brand d-flex align-items-center justify-content-center">
            <div class="sidebar-brand-text mx-3">Dashboard</div>
        </NuxtLink>
        <hr class="sidebar-divider my-0" />
        <li class="nav-item active">
            <NuxtLink to="/" class="nav-link">
                <font-awesome-icon icon="fa-solid fa-person-walking-arrow-loop-left" />
                <span>Return to Site</span>
            </NuxtLink>
        </li>
        <hr class="sidebar-divider" />
        <div class="sidebar-heading">New Content</div>
        <li class="nav-item">
            <NuxtLink to="/dashboard/javs/new" class="nav-link">
                <font-awesome-icon icon="fa-solid fa-square-plus" />
                <span>New Jav</span>
            </NuxtLink>
        </li>
        <li class="nav-item">
            <NuxtLink to="/dashboard/idols/new" class="nav-link">
                <font-awesome-icon icon="fa-solid fa-square-plus" />
                <span>New Idol</span>
            </NuxtLink>
        </li>
        <li class="nav-item">
            <NuxtLink to="/dashboard/categories/new" class="nav-link">
                <font-awesome-icon icon="fa-solid fa-square-plus" />
                <span>New Category</span>
            </NuxtLink>
        </li>
        <!-- Divider -->
        <hr class="sidebar-divider" />
        <!-- Heading -->
        <div class="sidebar-heading">Data Center</div>
        <li class="nav-item">
            <NuxtLink to="/dashboard/javs/1" class="nav-link">
                <font-awesome-icon icon="fa-solid fa-film" />
                <span>Javs</span>
            </NuxtLink>
        </li>
        <li class="nav-item">
            <NuxtLink to="/dashboard/idols/1" class="nav-link">
                <font-awesome-icon icon="fa-solid fa-person-dress" />
                <span>Idols</span>
            </NuxtLink>
        </li>
        <li class="nav-item">
            <NuxtLink to="/dashboard/categories" class="nav-link">
                <font-awesome-icon icon="fa-solid fa-tags" />
                <span>Categories</span>
            </NuxtLink>
        </li>        
        <hr class="sidebar-divider d-none d-md-block" />
        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle" @click="logOut()">
                <font-awesome-icon icon="fa-solid fa-door-closed" class="icon-navbar" />
            </button>
        </div>
    </ul>
</template>

<script setup>
const cookieEmail = useCookie('email');
const cookieToken = useCookie('token');

const logOut = () => {
    cookieEmail.value = null;
    cookieToken.value = null;
    reloadNuxtApp({
        path: "/",
        ttl: 1000, // default 10000
    });
}

</script>

<style lang="scss">
.bg-gradient-primary {
    background-color: #000;
}

.sidebar {
    width: 6.5rem;
    min-height: 100vh;
}

.sidebar .nav-item {
    position: relative;
}

.sidebar .nav-item:last-child {
    margin-bottom: 1rem;
}

.sidebar .nav-item .nav-link {
    text-align: center;
    padding: 0.75rem 1rem;
    width: 6.5rem;
}

.sidebar .nav-item .nav-link span {
    font-size: 0.65rem;
    display: block;
}

.sidebar .nav-item.active .nav-link {
    font-weight: 700;
}

.sidebar .nav-item .collapse {
    position: absolute;
    left: calc(6.5rem + 1.5rem / 2);
    z-index: 1;
    top: 2px;
}

.sidebar .nav-item .collapse .collapse-inner {
    border-radius: 0.35rem;
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
}

.sidebar .nav-item .collapsing {
    display: none;
    transition: none;
}

.sidebar .nav-item .collapse .collapse-inner,
.sidebar .nav-item .collapsing .collapse-inner {
    padding: .5rem 0;
    min-width: 10rem;
    font-size: 0.85rem;
    margin: 0 0 1rem 0;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-header,
.sidebar .nav-item .collapsing .collapse-inner .collapse-header {
    margin: 0;
    white-space: nowrap;
    padding: .5rem 1.5rem;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 0.65rem;
    color: #b7b9cc;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-item,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item {
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    display: block;
    color: #3a3b45;
    text-decoration: none;
    border-radius: 0.35rem;
    white-space: nowrap;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-item:hover,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item:hover {
    background-color: #eaecf4;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-item:active,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item:active {
    background-color: #dddfeb;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-item.active,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item.active {
    color: #4e73df;
    font-weight: 700;
}

.sidebar #sidebarToggle {
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
    cursor: pointer;
    color: #fff;
}

.sidebar #sidebarToggle:hover {
    text-decoration: none;
}

.sidebar #sidebarToggle:focus {
    outline: none;
}

.sidebar.toggled {
    width: 0 !important;
    overflow: hidden;
}

.sidebar.toggled #sidebarToggle::after {
    content: '\f105';
    font-family: 'Font Awesome 5 Free';
    margin-left: 0.25rem;
}

.sidebar .sidebar-brand {
    height: 4.375rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
    padding: 1.5rem 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    z-index: 1;
}

.sidebar .sidebar-brand .sidebar-brand-icon i {
    font-size: 2rem;
}

.sidebar .sidebar-brand .sidebar-brand-text {
    display: none;
    color: #E8175D;
}

.sidebar hr.sidebar-divider {
    margin: 0 1rem 1rem;
}

.sidebar .sidebar-heading {
    text-align: center;
    padding: 0 1rem;
    font-weight: 800;
    font-size: 0.65rem;
}

@media (min-width: 768px) {
    .sidebar {
        width: 14rem !important;
    }

    .sidebar .nav-item .collapse {
        position: relative;
        left: 0;
        z-index: 1;
        top: 0;
        -webkit-animation: none;
        animation: none;
    }

    .sidebar .nav-item .collapse .collapse-inner {
        border-radius: 0;
        box-shadow: none;
    }

    .sidebar .nav-item .collapsing {
        display: block;
        transition: height 0.15s ease;
    }

    .sidebar .nav-item .collapse,
    .sidebar .nav-item .collapsing {
        margin: 0 1rem;
    }

    .sidebar .nav-item .nav-link {
        display: block;
        width: 100%;
        text-align: left;
        padding: 1rem;
        width: 14rem;
    }

    .sidebar .nav-item .nav-link i {
        font-size: 0.85rem;
        margin-right: 0.25rem;
    }

    .sidebar .nav-item .nav-link span {
        font-size: 0.85rem;
        display: inline;
    }

    .sidebar .nav-item .nav-link[data-toggle="collapse"]::after {
        width: 1rem;
        text-align: center;
        float: right;
        vertical-align: 0;
        border: 0;
        font-weight: 900;
        content: '\f107';
        font-family: 'Font Awesome 5 Free';
    }

    .sidebar .nav-item .nav-link[data-toggle="collapse"].collapsed::after {
        content: '\f105';
    }

    .sidebar .sidebar-brand .sidebar-brand-icon i {
        font-size: 2rem;
    }

    .sidebar .sidebar-brand .sidebar-brand-text {
        display: inline;
    }

    .sidebar .sidebar-heading {
        text-align: left;
    }

    .sidebar.toggled {
        overflow: visible;
        width: 6.5rem !important;
    }

    .sidebar.toggled .nav-item .collapse {
        position: absolute;
        left: calc(6.5rem + 1.5rem / 2);
        z-index: 1;
        top: 2px;
        -webkit-animation-name: growIn;
        animation-name: growIn;
        -webkit-animation-duration: 200ms;
        animation-duration: 200ms;
        -webkit-animation-timing-function: transform cubic-bezier(0.18, 1.25, 0.4, 1), opacity cubic-bezier(0, 1, 0.4, 1);
        animation-timing-function: transform cubic-bezier(0.18, 1.25, 0.4, 1), opacity cubic-bezier(0, 1, 0.4, 1);
    }

    .sidebar.toggled .nav-item .collapse .collapse-inner {
        box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
        border-radius: 0.35rem;
    }

    .sidebar.toggled .nav-item .collapsing {
        display: none;
        transition: none;
    }

    .sidebar.toggled .nav-item .collapse,
    .sidebar.toggled .nav-item .collapsing {
        margin: 0;
    }

    .sidebar.toggled .nav-item:last-child {
        margin-bottom: 1rem;
    }

    .sidebar.toggled .nav-item .nav-link {
        text-align: center;
        padding: 0.75rem 1rem;
        width: 6.5rem;
    }

    .sidebar.toggled .nav-item .nav-link span {
        font-size: 0.65rem;
        display: block;
    }

    .sidebar.toggled .nav-item .nav-link i {
        margin-right: 0;
    }

    .sidebar.toggled .nav-item .nav-link[data-toggle="collapse"]::after {
        display: none;
    }

    .sidebar.toggled .sidebar-brand .sidebar-brand-icon i {
        font-size: 2rem;
    }

    .sidebar.toggled .sidebar-brand .sidebar-brand-text {
        display: none;
    }

    .sidebar.toggled .sidebar-heading {
        text-align: center;
    }
}

.sidebar-dark .sidebar-brand {
    color: #fff;
}

.sidebar-dark hr.sidebar-divider {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.sidebar-dark .sidebar-heading {
    color: rgba(255, 255, 255, 0.4);
}

.sidebar-dark .nav-item .nav-link {
    color: rgba(255, 255, 255, 0.8);
}

.sidebar-dark .nav-item .nav-link i {
    color: rgba(255, 255, 255, 0.3);
}

.sidebar-dark .nav-item .nav-link:active,
.sidebar-dark .nav-item .nav-link:focus,
.sidebar-dark .nav-item .nav-link:hover {
    color: #fff;
}

.sidebar-dark .nav-item .nav-link:active i,
.sidebar-dark .nav-item .nav-link:focus i,
.sidebar-dark .nav-item .nav-link:hover i {
    color: #fff;
}

.sidebar-dark .nav-item .nav-link[data-toggle="collapse"]::after {
    color: rgba(255, 255, 255, 0.5);
}

.sidebar-dark .nav-item.active .nav-link {
    color: #fff;
}

.sidebar-dark .nav-item.active .nav-link i {
    color: #fff;
}

.sidebar-dark #sidebarToggle {
    background-color: rgba(255, 255, 255, 0.2);
}

.sidebar-dark #sidebarToggle::after {
    color: rgba(255, 255, 255, 0.5);
}

.sidebar-dark #sidebarToggle:hover {
    background-color: rgba(255, 255, 255, 0.25);
}

.sidebar-dark.toggled #sidebarToggle::after {
    color: rgba(255, 255, 255, 0.5);
}
</style>