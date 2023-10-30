import shade from '@/components/lib/usetheme/primecss/utils/color/shade';
import tint from '@/components/lib/usetheme/primecss/utils/color/tint';

const palette = (color) => {
    return Array.from({ length: 10 }).reduce((acc, _, i) => {
        i <= 5 ? (acc[i === 0 ? '50' : `${i * 100}`] = tint(color, (5 - i) * 19)) : (acc[`${i * 100}`] = shade(color, i * 15));

        return acc;
    }, {});
};

export default {
    global: {
        css: `:root { color-scheme: light; }`,
        properties: {
            font: {
                family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                size: '14px',
                weight: 'normal'
            },
            color: '#495057',
            borderRadius: '6px',
            gap: '0.5rem',
            transition: {
                duration: '0.2s',
                property: 'background-color, color, border-color, box-shadow'
            }
        },
        variables: {
            primaryColor: '#3B82F6',
            primaryColorText: '#ffffff',
            textColor: '#4b5563',
            textColorSecondary: '#6b7280',
            surface: {
                a: '#ffffff',
                b: '#f9fafb',
                c: '#f3f4f6',
                d: '#e5e7eb',
                e: '#ffffff',
                f: '#ffffff',
                0: '#ffffff',
                50: '#f9fafb',
                100: '#f3f4f6',
                200: '#e5e7eb',
                300: '#d1d5db',
                400: '#9ca3af',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
                800: '#1f2937',
                900: '#111827'
            },
            gray: {
                50: '#f9fafb',
                100: '#f3f4f6',
                200: '#e5e7eb',
                300: '#d1d5db',
                400: '#9ca3af',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
                800: '#1f2937',
                900: '#111827'
            },
            blue: palette('#3B82F6'),
            green: palette('#22C55E'),
            yellow: palette('#EAB308'),
            cyan: palette('#06B6D4'),
            pink: palette('#EC4899'),
            indigo: palette('#6366F1'),
            teal: palette('#14B8A6'),
            orange: palette('#F97316'),
            bluegray: palette('#64748B'),
            purple: palette('#A855F7'),
            red: palette('#FF3D32'),
            primary: palette('#3B82F6')
        }
    },
    panel: {
        root: {
            header: {
                properties: {
                    color: '#343a40',
                    background: '#f8f9fa',
                    padding: {
                        top: '1.25rem',
                        right: '1.25rem',
                        bottom: '1.25rem',
                        left: '1.25rem'
                    },
                    border: {
                        width: '1px',
                        style: 'solid',
                        color: '#dee2e6'
                    }
                }
            },
            title: {
                properties: {
                    font: {
                        size: 'inherit',
                        weight: 700
                    }
                }
            },
            toggler: {
                properties: {
                    width: '2rem',
                    height: '2rem',
                    color: '#6c757d',
                    background: 'transparent',
                    border: {
                        width: 0,
                        style: 'none',
                        color: 'initial',
                        radius: '50%'
                    }
                },
                states: {
                    hover: {
                        properties: {
                            color: '#343a40',
                            background: '#e9ecef',
                            border: {
                                width: 'inherit',
                                style: 'inherit',
                                color: '#dee2e6'
                            }
                        }
                    },
                    focus: {
                        properties: {
                            outline: {
                                color: 'var(--p-primary-light-color)',
                                style: 'none',
                                width: 0,
                                offset: 0
                            },
                            boxShadow: '0 0 0 0.2rem var(--p-primary-light-color)'
                        }
                    }
                }
            },
            content: {
                properties: {
                    color: '#495057',
                    background: '#ffffff',
                    padding: {
                        top: '1.25rem',
                        right: '1.25rem',
                        bottom: '1.25rem',
                        left: '1.25rem'
                    },
                    border: {
                        width: '1px',
                        style: 'solid',
                        color: '#dee2e6'
                    }
                }
            },
            footer: {
                properties: {
                    color: '#495057',
                    background: '#ffffff',
                    padding: {
                        top: '0.75rem',
                        right: '1.25rem',
                        bottom: '0.75rem',
                        left: '1.25rem'
                    },
                    border: {
                        width: '1px',
                        style: 'solid',
                        color: '#dee2e6'
                    }
                }
            },
            variants: {
                toggleable: {
                    header: {
                        properties: {
                            padding: {
                                top: '0.75rem',
                                right: '1.25rem',
                                bottom: '0.75rem',
                                left: '1.25rem'
                            }
                        }
                    }
                }
            }
        }
    }
};
