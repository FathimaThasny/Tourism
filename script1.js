$(function() {
    "use strict";

    function PasswordStrengthCalculator() {

        function passwordContainsLowercaseLetter(value) {
            return (/[a-z]/).test(value);
        }

        function passwordContainsUppercaseLetter(value) {
            return (/[A-Z]/).test(value);
        }

        function passwordContainsSpaces(value) {
            return (/ /).test(value);
        }

        function passwordContainsNumber(value) {
            return (/[0-9]/).test(value);
        }

        function passwordContainsSymbol(value) {
            var containsSymbol = false,
                symbols = "-!§$%&/()=?.:,~;'#+-/*\\|{}[]_<>\"".split("");

            $.each(symbols, function(index, symbol) {
                if (value.indexOf(symbol) > -1) {
                    containsSymbol = true;

                    // We found a symbol. Therefore, return false to exit $.each early (short-circuit).
                    return false;
                }
            });

            return containsSymbol;
        }

        function countSpaces(value) {
            return value.split(/ +/).length - 1;
        }

        return {
            calculate: function(value, points) {
                var score = value.length * points.forEachCharacter;

                if (passwordContainsSpaces(value)) { score += countSpaces(value) * points.forEachSpace; }
                if (passwordContainsLowercaseLetter(value)) { score += points.containsLowercaseLetter; }
                if (passwordContainsUppercaseLetter(value)) { score += points.containsUppercaseLetter; }
                if (passwordContainsNumber(value)) { score += points.containsNumber; }
                if (passwordContainsSymbol(value)) { score += points.containsSymbol; }

                return score;
            }
        };
    }

    function Indicator(indicator, settings) {
        var $indicator = $(indicator).hide();

        function getStrengthClass(score) {
            var strengthIndex = parseInt(Math.round(score * (settings.strengthClassNames.length - 1) * 100 / settings.secureStrength) / 100, 10);
            if (strengthIndex >= settings.strengthClassNames.length) {
                strengthIndex = settings.strengthClassNames.length - 1;
            }

            return settings.strengthClassNames[strengthIndex];
        }

        return {
            refresh: function(score) {
                if (score > 0) {
                    $indicator.css("display", settings.indicatorDisplayType);
                } else {
                    $indicator.hide();
                }

                var strengthClass = getStrengthClass(score);
                $.each(settings.strengthClassNames, function(index, value) {
                    $indicator.removeClass(value.name);
                });
                $indicator.addClass(strengthClass.name);

                if (settings.text) {
                    $indicator.text(strengthClass.text);
                }
            }
        };
    }

    var calculator,
        defaults = {
            secureStrength: 25,

            $indicator: undefined,
            indicatorClassName: "password-strength-indicator",
            indicatorDisplayType: "inline-block",

            text: true,

            points: {
                forEachCharacter: 1,
                forEachSpace: 1,
                containsLowercaseLetter: 2,
                containsUppercaseLetter: 2,
                containsNumber: 4,
                containsSymbol: 5
            },

            strengthClassNames: [{
                name: "very-weak",
                text: "very weak"
            }, {
                name: "weak",
                text: "weak"
            }, {
                name: "mediocre",
                text: "mediocre"
            }, {
                name: "strong",
                text: "strong"
            }, {
                name: "very-strong",
                text: "very strong"
            }]
        },

        methods = {
            init: function(options) {
                var settings = $.extend({}, defaults, options),
                    $input = $(this),
                    $indicator = getIndicatorElement($input, settings),
                    indicator = new Indicator($indicator, settings);

                setupAutomaticIndicatorRefresh(indicator, $input, settings);

                return $input;
            },

            calculate: function(value, options) {
                var settings = $.extend(defaults, options);

                if (!calculator) {
                    calculator = new PasswordStrengthCalculator();
                }

                return calculator.calculate(value, settings.points);
            },

            defaults: function() {
                return defaults;
            }
        };

    function getIndicatorElement($input, settings) {
        var $indicator = settings.$indicator || $("<span>&nbsp;</span>").insertAfter($input);

        return $indicator.attr("class", settings.indicatorClassName);
    }

    function setupAutomaticIndicatorRefresh(indicator, $input, settings) {
        var refresh = function() {
            var password = $input.val(),
                score = methods.calculate(password, settings);

            indicator.refresh(score);
        };

        $input.on("keyup", refresh);
    }

    $.fn.passwordStrengthIndicator = $.fn.passwordStrength = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }

        if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        }

        $.error("Method " +  method + " does not exist on jQuery.passwordStrength");
    };
});





var mail = document.getElementById("email");
var pswd = document.getElementById("password");
function lvalidate()
{
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    

    if(res.test(mail.value)!="1")
    {
        window.alert("Email Is Invalid");
        return false;
    }
    else if(psr.test(pswd.value)!="1")
    {
        window.alert("Password Is Invalid, try again");
        window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");

        return false;
    }
    else
    {
       alert("validation Success");
        return true;
    }
    
};


var smail = document.getElementById("email");
var spswd = document.getElementById("password");
var spswd2 = document.getElementById("cpassword");
var phone = document.getElementById("phone");

function svalidate()
{
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(res.test(smail.value)!="1")
    {
        
        window.alert("Email Is Invalid");
        return false;
    }
    else if(phoneno.test(phone.value)!="1")
    {
        window.alert("Please enter a valid phone number");
        return false;
    }
    else if(psr.test(spswd.value)!="1")
    {
        window.alert("Password Is Invalid");
        window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
        window.alert("try again");
        return false;
    }
    else  if(spswd.value!=spswd2.value)
    {
        window.alert("Passwords Doesnt Match, Please Re-enter");
        return false;
    }
    else
    {
        window.alert("validation Success");
        return true;
    }
    
};


$(document).ready(function () {

    $('#password').on('keyup', function () {

        let textElement = $(this).val()
        let strength = 0

        $('#typepass').find('h4').html(`Your Password: ${textElement}`)

        if (textElement.length > 0) {
            let sizeElements = textElement.length

            if (sizeElements > 10) {

                strength += 30

            } else {
                let calcMath = (sizeElements * 2)

                strength += calcMath

            }

        }

        let lowerCase = new RegExp(/[a-z]/)
        if (lowerCase.test(textElement)) {
            strength += 16
        }

        let upperCase = new RegExp(/[A-Z]/)
        if (upperCase.test(textElement)) {
            strength += 18
        }

        let regularNumber = new RegExp(/[0-9]/i)
        if (regularNumber.test(textElement)) {
            strength += 16
        }

        let specialChars = new RegExp(/[^a-z0-9]/i)
        if (specialChars.test(textElement)) {
            strength += 20
        }
        
        //Function to produce result
        let renderResult = (strengthData, color) => {
            return $('#strengthResult').html(
                `
                          
            <div class="progress" style="height: 40px;">
                <div class="progress-bar bg-${color}" role="progressbar" style="width: ${strengthData}%" aria-valuenow="${strengthData}" aria-valuemin="0" aria-valuemax="100"><strong style="font-size: 15px">${strength}%</strong></div>
            </div>`
            )
        }

        if (strength < 21) {
            renderResult(strength, 'danger')//red very weak password
        } else
            if (strength > 20 && strength < 41) {
                renderResult(strength, 'warning')//orange weak password
            } else
                if (strength > 40 && strength < 61) {
                    renderResult(strength, 'secondary')//medium password
                } else
                    if (strength > 60 && strength < 81) {
                        renderResult(strength, 'info')// strong password
                    } else {
                        renderResult(strength, 'success')//very strong password
                    }

        

    });

});