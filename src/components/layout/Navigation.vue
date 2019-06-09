<template>
    <div class="navigation" role="navigation">
        
        <div class="navigation__toggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
    
            <ul class="navigation__menu">
            <li><router-link to="/">Main Dashboard</router-link></li>
            <li><router-link to="/another">Another Dashboard</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'navigation',
};
</script>

<style lang="scss">
    .navigation {
        position: absolute;
        top: 0;
        left: 0;

        &__toggle {
            display: block;
            position: relative;
            top: 1rem;
            left: 1rem;
            z-index: 1;
            user-select: none;

            input {
                display: block;
                width: 40px;
                height: 32px;
                position: absolute;
                top: -7px;
                left: -5px;
                cursor: pointer;
                opacity: 0;
                z-index: 2;
                -webkit-touch-callout: none;

                &:checked {

                    ~ span {
                        opacity: 1;
                        transform: rotate(45deg) translate(-2px, -1px);

                        &:nth-last-child(3) {
                            opacity: 0;
                            transform: rotate(0deg) scale(0.2, 0.2);
                        }

                        &:nth-last-child(2) {
                            transform: rotate(-45deg) translate(0, -1px);
                        }
                    }

                    ~ ul {
                        transform: none;
                    }
                }
            }

            span {
                display: block;
                width: 33px;
                height: 4px;
                margin-bottom: 5px;
                position: relative;
                background: #cdcdcd;
                border-radius: 3px;
                z-index: 1;
                transform-origin: 4px 0px;
                transition: all 0.2s cubic-bezier(0.77, 0.2, 0.05, 1.0);

                &:first-child {
                    transform-origin: 0% 0%;
                }

                &:nth-last-child(2) {
                    transform-origin: 0% 100%;
                }
            }
        }

        &__menu {
            position: absolute;
            top: -1rem;
            left: -1rem;
            margin: 0;
            width: 200px;
            height: 100%;
            padding: 5rem 2rem 3rem;
            background: darken($defaultBackgroundColor, 5%);
            border-right: 1px solid darken($defaultBackgroundColor, 8%);
            list-style-type: none;
            -webkit-font-smoothing: antialiased;
            transform-origin: 0% 0%;
            transform: translate(-100%, 0);
            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

            a {
                color: #fff;
                text-decoration: none;
                margin-bottom: .5rem;
                display: inline-block;
            }
        }
    }
</style>
